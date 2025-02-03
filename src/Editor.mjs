import * as uuid from 'uuid';
import Quaternion from 'quaternion';
import { Context, Results } from 'zf-data';

import * as gltf from './GltfUtils.mjs';
import Importer from './Importer.mjs';
import Exporter from './Exporter.mjs';
import Project from './Project.mjs';
import SessionMiddleware from './SessionMiddleware.mjs';
import ProjectMiddleware from './ProjectMiddleware.mjs';

class Editor {
  constructor(dependencies) {
    this.gui = dependencies.gui;
    this.renderer = dependencies.renderer;
    this.system = dependencies.system;

    this.context = new Context();
    this.context.enableProjectData();
    this.context.enableProjectSession();
    this.context.enableClientSession();
    this.context.enableUserSession();

    this.middlewares = [
      new SessionMiddleware(),
      new ProjectMiddleware(),
    ];

    if (this.renderer) {
      this.middlewares.push(this.renderer);
    }

    if (this.gui) {
      this.middlewares.push(this.gui);
    }

    if (this.system) {
      this.middlewares.push(this.system);
    }

    this.prevTime = 0;

    this.updates = new Results();

    this.triggers = [
      {
        test: /(add|update):\/nodes\/[^/]*\/extras\/rotationEuler/,
        action: (update, results) => {
          const [, , id] = update.path.split('/');
          const valueRad = update.value.map((v) => (Math.PI * v) / 180);
          const quat = Quaternion.fromEuler(...valueRad, 'XYZ');

          results.addProjectDataUpdate({
            op: 'add',
            path: `/nodes/${id}/rotation`,
            value: [quat.x, quat.y, quat.z, quat.w],
          });
        },
      },
    ];
  }

  getActiveProjectDetails() {
    const activeProjectId = this.context.clientSession.projectId;
    return this.context.userSession.projects[activeProjectId];
  }

  async init() {
    await Promise.all(this.middlewares.map(async (middleware) => {
      this.updates.mergeResults(await middleware.init());
    }));
  }

  /* eslint-disable-next-line class-methods-use-this */
  loadProject(params, results) {
    const { id } = params;
    results.addClientSessionUpdate({
      op: 'replace',
      path: '/projectId',
      value: id,
    });
  }

  loadRemoteProject(params, results) {
    const { id, server } = params;

    results.addUserSessionUpdate({
      op: 'add',
      path: `/projects/${id}`,
      value: {
        id,
        name: id,
        server,
      },
    });
    return this.loadProject(params, results);
  }

  export() {
    const projectDetails = this.getActiveProjectDetails();
    const exporter = new Exporter();
    return Promise.resolve()
      .then(() => exporter.exportProject(this.context.projectData))
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
      .then(() => exporter.exportGltf(this.context.projectData))
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

        patch.forEach((update) => this.updates.addProjectDataUpdate(update));
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

      if (id === this.context.clientSession.projectId) {
        results.addClientSessionUpdate({
          op: 'replace',
          path: '/projectId',
          value: null,
        });
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
    console.dir(JSON.parse(JSON.stringify(this.context.projectData)));
    console.dir(JSON.parse(JSON.stringify(this.context.projectSession)));
    console.dir(JSON.parse(JSON.stringify(this.context.clientSession)));
    console.dir(JSON.parse(JSON.stringify(this.context.userSession)));
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
    results.projectData.forEach((update) => {
      const key = `${update.op}:${update.path}`;
      this.triggers.forEach((trigger) => {
        if (trigger.test.test(key)) {
          trigger.action(update, results);
        }
      });
    });
  }

  async update(time) {
    const dt = (time - this.prevTime) / 1000;
    this.prevTime = time;

    this.updates.addScratchSessionUpdate({
      op: 'add',
      path: '/dt',
      value: dt,
    });

    this.context.update(this.updates);

    const results = new Results();
    this.middlewares.forEach((middleware) => {
      results.mergeResults(middleware.update(this.updates));
    });

    if (!this.gui.isActive() && this.renderer) {
      this.renderer.controls.update(dt);

      while (this.system.events.length) {
        const event = this.system.events.shift();
        if (event.type === 'MouseButtonEvent') {
          const viewport = this.context.projectSession.viewports[0];
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

    this.updates.procedureCalls.forEach((c) => this.handleRpc(c, results));
    this.handleTriggeredUpdates(results);

    this.updates.clear();
    this.updates.mergeResults(results);
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
