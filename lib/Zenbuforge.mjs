import * as jsonpatch from 'fast-json-patch';
import * as uuid from 'uuid';

import * as gltf from './GltfUtils.mjs';
import Importer from './Importer.mjs';
import Project from './Project.mjs';

import ProjectListModel from './ProjectListModel.mjs';

class Clock {
  constructor() {
    this.lastTime = this.getTime();
  }

  getTime() {
    return performance.now();
  }

  getDelta() {
    const currentTime = this.getTime();
    const dt = (currentTime - this.lastTime) / 1000.0;
    this.lastTime = currentTime;
    return dt;
  }
}

class Zenbuforge {
  constructor(dependencies) {
    this.project = null;
    this.session = {
      selections: [],
    };
    this.projectList = new ProjectListModel();
    this.gui = dependencies.gui;
    this.renderer = dependencies.renderer;
    this.fileLoader = dependencies.fileLoader;
    this.width = 0;
    this.height = 0;

    this.clock = new Clock();
  }

  async init() {
    await this.gui.init();
    await this.projectList.init();

    const projects = Object.values(this.projectList.getViewProxy());
    if (projects.length > 0) {
      await this.loadProject(projects[0].id);
    }
  }

  loadProject(id) {
    this.project = new Project({ id });
    return Promise.resolve()
      .then(() => this.project.init())
      .then(() => this.renderer.updateGltf(this.project.jsonProxy));
  }

  loadFile() {
    const importer = new Importer();
    return Promise.resolve()
      .then(() => this.fileLoader.selectFile())
      .then((fileMap) => importer.processFileMap(fileMap))
      .then(() => {
        importer.errors.forEach((e) => console.error(e));

        const patch = [];
        (importer.results ?? []).forEach((result) => {
          const normalized = JSON.parse(JSON.stringify(result));
          gltf.addIdExtension(normalized);
          gltf.initNames(normalized);
          gltf.ensureTRSNodes(normalized);

          gltf.COLLECTION_PROPS.forEach((prop) => {
            (normalized[prop] ?? []).forEach((obj) => {
              const id = gltf.getId(obj) ?? uuid.v4();
              patch.push({
                op: 'add',
                path: `/${prop}/${id}`,
                value: obj,
              });
            });
          });

          (normalized?.extensions?.KHR_lights_punctual?.lights ?? []).forEach((light) => {
            const id = gltf.getId(light) ?? uuid.v4();
            patch.push({
              op: 'add',
              path: `/extensions/KHR_lights_punctual/lights/${id}`,
              value: light,
            });
          });
        });

        jsonpatch.applyPatch(this.project.jsonProxy, patch, true, true, true);

        return this.renderer.updatePromise;
      });
  }

  handleRpc(rpc) {
    if (!(rpc.method in this)) {
      console.error(`No function ${rpc.method}`);
      return;
    }

    this[rpc.method](...rpc.params);
  }

  async update() {
    const dt = this.clock.getDelta();

    const model = {
      session: this.session,
      projectList: this.projectList.getViewProxy(),
      project: this.project?.jsonProxy,
    };
    const results = this.gui.update(
      dt,
      model,
      this.width,
      this.height,
    );

    jsonpatch.applyPatch(model, results.updates, true, true, true);
    this.projectList.applyUpdates(results.projectListUpdates);
    results.procedureCalls.forEach((u) => this.handleRpc(u));

    if (!this.gui.isActive()) {
      this.renderer.controls.update(dt);
    }

    if (this.project) {
      this.renderer.camera.position.set(0, 0, -5);
      await this.renderer.updateGltfDelta(this.project.update());
      const scene = Object.keys(this.project?.jsonProxy?.scenes ?? [])[0];
      if (scene) {
        this.renderer.update(scene, this.width, this.height);
      }
    }

    this.gui.render();
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

export default Zenbuforge;
