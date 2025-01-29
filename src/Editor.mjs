import * as jsonpatch from 'fast-json-patch';
import * as uuid from 'uuid';
import Quaternion from 'quaternion';
import { Results } from 'zf-data';

import * as gltf from './GltfUtils.mjs';
import Importer from './Importer.mjs';
import Exporter from './Exporter.mjs';
import Project from './Project.mjs';
import SessionMiddleware from './SessionMiddleware.mjs';

class Editor {
  constructor(dependencies) {
    this.project = null;
    this.gui = dependencies.gui;
    this.renderer = dependencies.renderer;
    this.system = dependencies.system;

    this.projectSession = {};
    this.clientSession = {};
    this.userSession = {};

    this.middlewares = [
      new SessionMiddleware(),
    ];

    this.prevTime = 0;

    this.updates = new Results();

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

  getActiveProjectDetails() {
    const activeProjectId = this.clientSession.projectId;
    return this.userSession.projects[activeProjectId];
  }

  async init() {
    this.middlewares.forEach((middleware) => {
      this.updates = this.updates.mergeResults(middleware.init());
    });
    await this.gui.init();

    this.updateState('projectSession');
    this.updateState('clientSession');
    this.updateState('userSession');

    const activeProjectId = this.clientSession.projectId;
    if (activeProjectId) {
      this.loadProject({ id: activeProjectId });
    }
  }

  loadProject(params) {
    const { id } = params;
    if (this.project) {
      this.project.destroy();
    }

    const projectDetails = this.userSession.projects[id];
    this.project = new Project(projectDetails);
    return Promise.resolve()
      .then(() => this.project.init())
      .then(() => {
        this.updates.addClientSessionUpdate({
          op: 'replace',
          path: '/projectId',
          value: id,
        });
        this.updates.addProjectSessionUpdate({
          op: 'replace',
          path: '/selections',
          value: [],
        });
        if (this.renderer) {
          this.renderer.reset();
          this.renderer.updateGltf(this.project.jsonProxy);
          this.updates.addProjectDataUpdate({
            op: 'replace',
            path: '',
            value: JSON.parse(JSON.stringify(this.project.jsonProxy)),
          });
        }
      });
  }

  loadRemoteProject(params) {
    const { id, server } = params;
    this.userSession.projects[id] = {
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

    const update = {
      op: 'add',
      path: `${key}/${id}`,
      value,
    };

    if (kind === 'projects') {
      results.addUserSessionUpdate(update);
    } else {
      results.addProjectDataUpdate(update);
    }

    results.addProjectSessionUpdate({
      op: 'replace',
      path: '/selections',
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

      if (id === this.clientSession.projectId) {
        results.addClientSessionUpdate({
          op: 'replace',
          path: '/projectId',
          value: null,
        });
        this.project.destroy();
        this.project = null;
      }
    }

    const update = {
      op: 'remove',
      path: `${key}/${id}`,
    };

    if (kind === 'projects') {
      results.addUserSessionUpdate(update);
    } else {
      results.addProjectDataUpdate(update);
    }

    results.addProjectSessionUpdate({
      op: 'replace',
      path: '/selections',
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

    results.addProjectSessionUpdate({
      op: 'replace',
      path: '/selections',
      value: [{
        kind: 'nodes',
        key: '/nodes',
        id: selection,
      }],
    });
  }

  debug() {
    console.log('==Project==');
    console.dir(JSON.parse(JSON.stringify(this.project?.jsonProxy ?? null)));
    console.dir(JSON.parse(JSON.stringify(this.projectSession)));
    console.dir(JSON.parse(JSON.stringify(this.clientSession)));
    console.dir(JSON.parse(JSON.stringify(this.userSession)));
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

  updateState(key) {
    this[key] = jsonpatch.applyPatch(this[key], this.updates[key], true, false, true).newDocument;
  }

  async update(time) {
    const dt = (time - this.prevTime) / 1000;
    this.prevTime = time;

    this.updates.addScratchSessionUpdate({
      op: 'add',
      path: '/dt',
      value: dt,
    });

    if (this.project && !this.project.isInitialized()) {
      return;
    }

    this.updateState('projectSession');
    this.updateState('clientSession');
    this.updateState('userSession');

    let results = new Results();
    this.middlewares.forEach((middleware) => {
      results = results.mergeResults(middleware.update(this.updates));
    });

    results = results.mergeResults(this.gui.update(
      this.updates,
      this.project?.jsonProxy,
    ));

    if (!this.gui.isActive() && this.renderer) {
      this.renderer.controls.update(dt);

      while (this.system.events.length) {
        const event = this.system.events.shift();
        if (event.type === 'MouseButtonEvent') {
          const viewport = this.projectSession.viewports[0];
          results.addCall({
            method: 'pickSelection',
            params: {
              x: (event.x - viewport.x) / viewport.width,
              y: (event.y - viewport.y) / viewport.height,
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
    //this.handleTriggeredUpdates(results);
    if (this.project) {
      try {
        jsonpatch.applyPatch(this.project.jsonProxy, results.projectData, true, true, true);
      } catch (e) {
        console.warn(e);
      }
    }

    if (this.renderer) {
      if (this.project) {
        const updates = this.project.update();
        results.projectData.push(...updates);
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
      const selectedNodes = this.projectSession.selections
        .filter((s) => s.kind === 'nodes' && s.id !== null)
        .map((s) => s.id);
      this.renderer.update(
        this.projectSession.viewports[0],
        selectedNodes,
      );
    }

    const projectDetails = this.getActiveProjectDetails();
    if (projectDetails && this.system) {
      this.system.setProject(projectDetails.name);
    }

    this.updates.clear();
    this.updates = this.updates.mergeResults(results);
  }

  resize(width, height) {
    this.updates.addScratchSessionUpdate({
      op: 'add',
      path: '/width',
      value: width,
    });

    this.updates.addScratchSessionUpdate({
      op: 'add',
      path: '/height',
      value: height,
    });
  }
}

export default Editor;
