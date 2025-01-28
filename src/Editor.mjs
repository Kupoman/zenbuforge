import * as jsonpatch from 'fast-json-patch';
import * as uuid from 'uuid';
import Quaternion from 'quaternion';
import { Results } from 'zf-data';

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

    this.updates = new Results();

    this.projectSession = {
      selections: [],
      viewports: [{
        x: 0,
        y: 0,
        width: 1,
        height: 1,
      }],
    };
    this.clientSession = {
      width: 1,
      height: 1,
    };
    this.userSession = {};

    this.triggers = [
      {
        test: /(add|update):\/project\/nodes\/[^/]*\/extras\/rotationEuler/,
        action: (update) => {
          const [, , , id] = update.path.split('/');
          const node = this.project.jsonProxy.nodes[id];
          const valueRad = update.value.map((v) => (Math.PI * v) / 180);
          const quat = Quaternion.fromEuler(...valueRad, 'XYZ');
          node.rotation = [quat.x, quat.y, quat.z, quat.w];
        },
      },
    ];
  }

  updateSession(scope, dt, updates) {
    jsonpatch.applyPatch(this[scope], updates[scope], true, true, true);
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
          this.renderer.reset();
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
      });
  }

  /* eslint-disable-next-line class-methods-use-this */
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

  debug() {
    console.log('==Project==');
    console.dir(JSON.parse(JSON.stringify(this.project?.jsonProxy)));
    console.dir(this.projectSession);
    console.dir(this.clientSession);
    console.dir(this.userSession);
    console.log('==Renderer==');
    this.renderer.debug();
  }

  handleRpc(rpc, results) {
    if (!(rpc.method in this)) {
      console.error(`No function ${rpc.method}`);
      return;
    }

    this[rpc.method](rpc.params, results);
  }

  handleTriggeredUpdates(results) {
    results.updates.forEach((update) => {
      const key = `${update.op}:${update.path}`;
      this.triggers.forEach((trigger) => {
        if (trigger.test.test(key)) {
          trigger.action(update);
        }
      });
    });
  }

  async update(time) {
    const dt = (time - this.prevTime) / 1000;
    this.prevTime = time;

    if (this.project && !this.project.isInitialized()) {
      return;
    }

    this.updateSession('projectSession', dt, this.updates);
    this.updateSession('clientSession', dt, this.updates);
    this.updateSession('userSession', dt, this.updates);

    const model = {
      session: this.session.jsonProxy,
      projectList: this.projectList.jsonProxy,
      project: this.project?.jsonProxy,
    };
    const results = this.gui.update(
      dt,
      this.project?.jsonProxy,
      this.updates,
    );

    if (!this.gui.isActive() && this.renderer) {
      this.renderer.controls.update(dt);

      while (this.system.events.length) {
        const event = this.system.events.shift();
        if (event.type === 'MouseButtonEvent') {
          results.addCall({
            method: 'pickSelection',
            params: {
              x: (event.x - results.viewport.x) / results.viewport.width,
              y: (event.y - results.viewport.y) / results.viewport.height,
            },
          });
        }

        if (event.type === 'KeyboardEvent') {
          if (event.keysym === 'KeyP') {
            results.addCall({ method: 'debug' });
          }
        }
      }
    } else {
      this.system.events = [];
    }

    results.procedureCalls.forEach((c) => this.handleRpc(c, results));
    this.handleTriggeredUpdates(results);
    jsonpatch.applyPatch(model, results.updates, true, true, true);

    if (this.renderer) {
      if (this.project) {
        const updates = this.project.update();
        const [scene] = Object.keys(this.project?.jsonProxy?.scenes ?? []);
        if (scene) {
          updates.push({
            op: 'add',
            path: '/scene',
            value: scene,
          });
        }
        await this.renderer.updateGltfDelta(updates);
      }
      const selectedNodes = this.session.jsonProxy.selections
        .filter((s) => s.kind === 'nodes' && s.id !== null)
        .map((s) => s.id);
      this.renderer.update(results.viewport, selectedNodes);
    }

    const projectDetails = this.getActiveProjectDetails();
    if (projectDetails && this.system) {
      this.system.setProject(projectDetails.name);
    }

    this.updates.clear();
    this.updates = this.updates.mergeResults(results);
  }

  resize(width, height) {
    this.width = width;
    this.height = height;

    this.updates.clientSession.push({
      op: 'add',
      path: '/width',
      value: width,
    });

    this.updates.clientSession.push({
      op: 'add',
      path: '/height',
      value: height,
    });
  }
}

export default Editor;
