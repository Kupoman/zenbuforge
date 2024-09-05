import * as jsonpatch from 'fast-json-patch';
import * as uuid from 'uuid';

import * as gltf from './GltfUtils.mjs';
import Importer from './Importer.mjs';
import Exporter from './Exporter.mjs';
import Project from './Project.mjs';
import ProjectList from './ProjectList.mjs';
import Session from './Session.mjs';

class Editor {
  constructor(dependencies) {
    this.project = null;
    this.session = new Session({ id: 'zf-session' });
    this.projectList = new ProjectList({ id: 'zf-projects' });
    this.gui = dependencies.gui;
    this.renderer = dependencies.renderer;
    this.system = dependencies.system;
    this.width = 0;
    this.height = 0;
    this.prevTime = 0;
  }

  getActiveProjectDetails() {
    const activeProjectId = this.session.jsonProxy.projectId;
    return this.projectList.jsonProxy.projects[activeProjectId];
  }

  async init() {
    await this.gui.init();
    await this.session.init();
    await this.projectList.init();

    const activeProjectId = this.session.jsonProxy.projectId;
    if (activeProjectId) {
      this.loadProject({ id: activeProjectId });
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
      .then(() => {
        if (this.renderer) {
          this.renderer.updateGltf(this.project.jsonProxy);
        }
      });
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

  export() {
    const projectDetails = this.getActiveProjectDetails();
    const exporter = new Exporter();
    return Promise.resolve()
      .then(() => exporter.exportProject(this.project.jsonProxy))
      .then(() => this.system.saveFile(
        exporter.results,
        `${projectDetails.name}.gltf`,
        'model/gltf+json',
      ));
  }

  exportGltf() {
    const projectDetails = this.getActiveProjectDetails();
    const exporter = new Exporter();
    return Promise.resolve()
      .then(() => exporter.exportGltf(this.project.jsonProxy))
      .then(() => this.system.saveFile(
        exporter.results,
        `${projectDetails.name}.glb`,
        'application/gltf-binary',
      ));
  }

  import() {
    const importer = new Importer();
    return Promise.resolve()
      .then(() => this.system.openFiles())
      .then((fileMap) => importer.processFileMap(fileMap))
      .then(() => {
        importer.errors.forEach((e) => console.error(e));

        const patch = [];
        (importer.results ?? []).forEach((result) => {
          const normalized = JSON.parse(JSON.stringify(result));
          gltf.normalize(normalized);

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

        return (this.renderer) ? this.renderer.updatePromise : Promise.resolve();
      });
  }

  addResource(params, results) {
    const { kind, key } = params;
    const id = uuid.v4();
    const value = {
      name: id,
      extras: { id },
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

    if (kind === 'nodes') {
      value.extensions = {
        KHR_lights_punctual: {},
      };
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

  deleteResource(params, results) {
    const { id, key, kind } = params;

    if (kind === 'projects') {
      const deleted = new Project({
        id,
      });
      deleted.init().then(() => deleted.delete());

      if (id === this.session.jsonProxy.projectId) {
        this.session.jsonProxy.projectId = null;
        this.project.destroy();
        this.project = null;
      }
    }

    results.addUpdate({
      op: 'remove',
      path: `${key}/${id}`,
    });

    results.addUpdate({
      op: 'replace',
      path: '/session/selections',
      value: [],
    });
  }

  pickSelection(params, results) {
    if (!this.renderer) {
      return;
    }
    const position = { x: params.x, y: params.y };
    const selection = this.renderer.pick(position);
    if (!selection) {
      return;
    }

    results.addUpdate({
      op: 'replace',
      path: '/session/selections',
      value: [{
        kind: 'nodes',
        key: '/project/nodes',
        id: selection,
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

  async update(time) {
    const dt = (time - this.prevTime) / 1000;
    this.prevTime = time;

    if (!this.project.isInitialized()) {
      return;
    }

    const model = {
      session: this.session.jsonProxy,
      projectList: this.projectList.jsonProxy,
      project: this.project?.jsonProxy,
    };
    const results = this.gui.update(
      time,
      model,
      this.width,
      this.height,
    );

    if (!this.gui.isActive() && this.renderer) {
      this.renderer.controls.update(dt);

      while (this.system.events.length) {
        const event = this.system.events.shift();
        if (event.type === 'MouseButtonEvent') {
          results.addCall({
            method: 'pickSelection',
            params: {
              x: event.x / this.width,
              y: event.y / this.height,
            },
          });
        }
      }
    } else {
      this.system.events = [];
    }

    results.procedureCalls.forEach((c) => this.handleRpc(c, results));
    jsonpatch.applyPatch(model, results.updates, true, true, true);

    if (this.renderer) {
      let scene = null;
      if (this.project) {
        await this.renderer.updateGltfDelta(this.project.update());
        scene = Object.keys(this.project?.jsonProxy?.scenes ?? [])[0];
      }
      this.renderer.update(scene, this.width, this.height);
    }

    this.gui.render();

    const projectDetails = this.getActiveProjectDetails();
    if (projectDetails && this.system) {
      this.system.setProject(projectDetails.name);
    }
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

export default Editor;
