import * as jsonpatch from 'fast-json-patch';
import * as uuid from 'uuid';

import * as gltf from './GltfUtils.mjs';
import Importer from './Importer.mjs';
import Project from './Project.mjs';
import ProjectList from './ProjectList.mjs';
import Session from './Session.mjs';

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
    this.session = new Session({ id: 'zf-session' });
    this.projectList = new ProjectList({ id: 'zf-projects' });
    this.gui = dependencies.gui;
    this.renderer = dependencies.renderer;
    this.fileLoader = dependencies.fileLoader;
    this.width = 0;
    this.height = 0;

    this.clock = new Clock();
  }

  async init() {
    await this.gui.init();
    await this.session.init();
    await this.projectList.init();

    const activeProjectId = this.session.jsonProxy.projectId;
    if (activeProjectId) {
      await this.loadProject({ id: activeProjectId });
    }
  }

  loadProject(params) {
    const { id } = params;
    if (this.project) {
      this.project.destroy();
    }
    const projectDetails = this.projectList.jsonProxy.projects[id];
    this.project = new Project(projectDetails);
    return Promise.resolve()
      .then(() => this.project.init())
      .then(() => this.session.setProject(id))
      .then(() => this.renderer.updateGltf(this.project.jsonProxy));
  }

  loadRemoteProject(params) {
    const { id, server } = params;
    this.projectList.jsonProxy.projects[id] = {
      id,
      name: id,
      server,
    };
    return this.loadProject(params);
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

  addResource(params, results) {
    const { kind, key } = params;
    const id = uuid.v4();
    const value = {
      name: id,
      extensions: {
        ZF_id: {
          id,
        },
      },
    };

    if (kind === 'meshes') {
      value.primitives = [];
    }

    if (kind === 'lights') {
      value.type = 'point';
    }

    if (kind === 'materials') {
      value.pbrMetallicRoughness = {};
    }

    if (kind === 'projects') {
      value.id = id;
      delete value.extensions;
    }

    results.addUpdate({
      op: 'add',
      path: `${key}/${id}`,
      value,
    });

    results.addUpdate({
      op: 'replace',
      path: '/session/selections',
      value: [{
        kind,
        key,
        id,
      }],
    });
  }

  handleRpc(rpc, results) {
    if (!(rpc.method in this)) {
      console.error(`No function ${rpc.method}`);
      return;
    }

    this[rpc.method](rpc.params, results);
  }

  async update() {
    const dt = this.clock.getDelta();

    const model = {
      session: this.session.jsonProxy,
      projectList: this.projectList.jsonProxy,
      project: this.project?.jsonProxy,
    };
    const results = this.gui.update(
      dt,
      model,
      this.width,
      this.height,
    );

    results.procedureCalls.forEach((c) => this.handleRpc(c, results));
    jsonpatch.applyPatch(model, results.updates, true, true, true);

    if (!this.gui.isActive()) {
      this.renderer.controls.update(dt);
    }

    let scene = null;
    if (this.project) {
      await this.renderer.updateGltfDelta(this.project.update());
      scene = Object.keys(this.project?.jsonProxy?.scenes ?? [])[0];
    }
    this.renderer.update(scene, this.width, this.height);

    this.gui.render();
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

export default Zenbuforge;
