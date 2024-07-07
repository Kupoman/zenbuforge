import * as jsonpatch from 'fast-json-patch';

import Importer from './Importer.mjs';
import Project from './Project.mjs';
import Session from './Session.mjs';

import SceneGraphModel from './SceneGraphModel.mjs';
import ProjectListModel from './ProjectListModel.mjs';
import SceneListModel from './SceneListModel.mjs';
import SelectionModel from './SelectionModel.mjs';

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
    this.session = new Session();
    this.newSession = {
      selections: [],
    };
    this.gui = dependencies.gui;
    this.renderer = dependencies.renderer;
    this.fileLoader = dependencies.fileLoader;
    this.width = 0;
    this.height = 0;

    this.models = {
      session: this.session,
      scenes: new SceneListModel(this.session),
      sceneGraph: new SceneGraphModel(this.session),
      projectList: new ProjectListModel(),
      node: new SelectionModel(this.session, 'nodes'),
      material: new SelectionModel(this.session, 'materials'),
      mesh: new SelectionModel(this.session, 'meshes'),
      texture: new SelectionModel(this.session, 'textures'),
      sampler: new SelectionModel(this.session, 'samplers'),
    };

    this.clock = new Clock();
  }

  async init() {
    await this.gui.init();
    await Promise.all(Object.values(this.models).map((m) => m.init()));

    const projects = Object.values(this.models.projectList.getViewProxy());
    if (projects.length > 0) {
      await this.loadProject(projects[0].id);
    }
  }

  loadProject(id) {
    this.project = new Project({ id });
    Object.values(this.models).forEach((m) => m.project = this.project);
    this.renderer.reset();
    this.project.observe((update) => this.renderer.handleUpdate(update));
    return Promise.resolve()
      .then(() => this.project.init())
      .then(() => {
        const selection = this.project.scenes.keys().next().value;
        this.session.selectScene(selection);
      })
      .then(() => {
        const history = this.project.getHistory();
        history.forEach((u) => this.renderer.handleUpdate(u));
        return this.renderer.updatePromise;
      });
  }

  loadFile() {
    const importer = new Importer();
    return Promise.resolve()
      .then(() => this.fileLoader.selectFile())
      .then((fileMap) => importer.processFileMap(fileMap))
      .then(() => {
        (importer.results ?? []).forEach((result) => this.project.mergeJSON(result));

        importer.errors.forEach((e) => console.error(e));

        return this.renderer.updatePromise;
      });
  }

  loadUrl(url) {
    return Promise.resolve()
      .then(() => fetch(url))
      .then((response) => response.json())
      .then((result) => {
        this.project.mergeJSON(result);
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

  update() {
    const dt = this.clock.getDelta();

    const model = {
      session: this.newSession,
      projectList: this.models.projectList.getViewProxy(),
      project: this.project?.jsonProxy,
    };
    const results = this.gui.update(
      dt,
      model,
      this.width,
      this.height,
    );

    jsonpatch.applyPatch(model, results.updates, true, true, true);
    this.models.projectList.applyUpdates(results.projectListUpdates);
    results.procedureCalls.forEach((u) => this.handleRpc(u));

    if (!this.gui.isActive()) {
      this.renderer.controls.update(dt);
    }
    this.renderer.camera.position.set(0, 0, -5);
    this.renderer.update(this.session.selections.scenes);

    this.gui.render();
  }

  resize(width, height) {
    this.renderer.resize(width, height);
    this.width = width;
    this.height = height;
  }
}

export default Zenbuforge;
