import * as jsonpatch from 'fast-json-patch';
import Quaternion from 'quaternion';
import * as uuid from 'uuid';

import { Context, Results } from 'zf-data';

import Project from './Project.mjs';
import Importer from './Importer.mjs';
import Exporter from './Exporter.mjs';
import * as gltf from './GltfUtils.mjs';

class ProjectMiddleware {
  constructor(filesystem) {
    this.filesystem = filesystem;

    this.context = new Context();
    this.context.enableClientSession();
    this.context.enableUserSession();

    this.project = null;
    this.results = new Results();

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

  init() {
    return this.results;
  }

  _loadProject() {
    if (this.project) {
      this.project.destroy();
    }

    const id = this.context.clientSession.projectId;
    const projectDetails = this.context.userSession.projects[id];
    this.project = new Project(projectDetails);

    this.results.addProjectSessionUpdate({
      op: 'replace',
      path: '/selections',
      value: [],
    });

    this.results.addProjectDataUpdate({
      op: 'replace',
      path: '',
      value: {},
    });

    Promise.resolve()
      .then(() => this.project.init())
      .then(() => {
        this.results.addProjectDataUpdate({
          op: 'replace',
          path: '',
          value: JSON.parse(JSON.stringify(this.project.jsonProxy)),
        });
      });
  }

  _getResults() {
    const resultStr = JSON.stringify(this.results);
    this.results.clear();
    return JSON.parse(resultStr);
  }

  _handleTriggeredUpdates(updates) {
    updates.projectData.forEach((update) => {
      const key = `${update.op}:${update.path}`;
      this.triggers.forEach((trigger) => {
        if (trigger.test.test(key)) {
          trigger.action(update, this.results);
        }
      });
    });
  }

  update(updates) {
    const previousId = this.context.clientSession.projectId;
    this.context.update(updates);

    updates.procedureCalls
      .filter((call) => call.method.startsWith('*.') || call.method.startsWith('project.'))
      .forEach((call) => {
        const func = call.method.split('.')[1];
        if (!(func in this)) {
          console.warn(`No function called ${call.method} in project`);
          return;
        }
        this[func](call.params, this.results);
      });

    const currentId = this.context.clientSession.projectId;
    if (typeof currentId === 'undefined' || currentId === null) {
      return this._getResults();
    }

    if (this.project === null || currentId !== previousId) {
      this._loadProject(this.results);
    } else if (this.project.isInitialized()) {
      const dataUpdates = updates.projectData.filter((u) => u.origin !== 'project');
      this.project.ydoc.transact(() => {
        jsonpatch.applyPatch(this.project.jsonProxy, dataUpdates, true, true, true);
      }, 'user');

      this.project.getUpdates(this.results);
    }

    const [scene] = Object.keys(this.project?.jsonProxy?.scenes ?? []);
    if (scene) {
      this.results.addProjectDataUpdate({
        op: 'add',
        path: '/scene',
        value: scene,
      });
    }

    this._handleTriggeredUpdates(updates);

    return this._getResults();
  }

  /* eslint-disable-next-line class-methods-use-this */
  load(params, results) {
    const { id } = params;
    results.addClientSessionUpdate({
      op: 'replace',
      path: '/projectId',
      value: id,
    });
  }

  loadRemote(params, results) {
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

  export() {
    const activeProjectId = this.context.clientSession.projectId;
    const projectDetails = this.context.userSession.projects[activeProjectId];

    const exporter = new Exporter();
    return Promise.resolve()
      .then(() => exporter.exportProject(this.project.jsonProxy))
      .then(() => this.filesystem.saveFile(
        exporter.results,
        `${projectDetails.name}.gltf`,
        'model/gltf+json',
      ));
  }

  exportGltf() {
    const activeProjectId = this.context.clientSession.projectId;
    const projectDetails = this.context.userSession.projects[activeProjectId];

    const exporter = new Exporter();
    return Promise.resolve()
      .then(() => exporter.exportGltf(this.project.jsonProxy))
      .then(() => this.filesystem.saveFile(
        exporter.results,
        `${projectDetails.name}.glb`,
        'application/gltf-binary',
      ));
  }

  import() {
    const importer = new Importer();
    return Promise.resolve()
      .then(() => this.filesystem.openFiles())
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

        patch.forEach((update) => this.results.addProjectDataUpdate(update));
      });
  }

  debug() {
    console.log('==Project==');
    console.dir(this.project.ymap.toJSON());
  }
}

export default ProjectMiddleware;

/* eslint-disable no-restricted-globals */
if (typeof self !== 'undefined' && self?.WorkerGlobalScope) {
  const middleware = new ProjectMiddleware();
  const initResults = middleware.init();
  postMessage(JSON.stringify(initResults));

  self.addEventListener('message', (event) => {
    const updates = JSON.parse(event.data);
    const results = middleware.update(updates);
    postMessage(JSON.stringify(results));
  });
}
/* eslint-enable no-restricted-globals */
