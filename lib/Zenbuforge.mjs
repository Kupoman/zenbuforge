import * as THREE from 'three';

import Gui from './gui/index.mjs';
import Project from './Project.mjs';
import Renderer from './renderer/index.mjs';
import Session from './Session.mjs';

import SceneGraphModel from './SceneGraphModel.mjs';
import ProjectListModel from './ProjectListModel.mjs';
import SceneListModel from './SceneListModel.mjs';
import SelectionModel from './SelectionModel.mjs';

class Zenbuforge {
  constructor(canvas) {
    this.project = null;
    this.session = new Session();
    this.canvas = canvas;
    this.gui = new Gui(canvas);
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
    };

    this.clock = new THREE.Clock();
    this.renderer = new Renderer(canvas);
  }

  async init() {
    await this.gui.init();
    Object.values(this.models).forEach((m) => m.init());
  }

  loadProject(id) {
    this.project = new Project({ id });
    Object.values(this.models).forEach((m) => m.project = this.project);
    this.renderer = new Renderer(this.canvas);
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
      })
      .then(() => {
        const scene = Object.values(this.renderer.data.scenes)[0];
        if (scene) {
          const light = new THREE.PointLight();
          light.position.set(1, 1, -1);
          light.intensity = 5;
          scene.add(light);
        }
      });
  }

  loadUrl(url) {
    return Promise.resolve()
      .then(() => fetch(url))
      .then((response) => response.json())
      .then((result) => {
        this.project.mergeJSON(result);
        return this.renderer.updatePromise;
      })
      .then(() => {
        const scene = Object.values(this.renderer.data.scenes)[0];
        if (scene) {
          const light = new THREE.PointLight();
          light.position.set(1, 1, -1);
          light.intensity = 5;
          scene.add(light);
        }
      });
  }

  handleRpc(update) {
    if (!(update.id in this)) {
      console.log(`No function ${update.id}`);
      return;
    }

    this[update.id](...update.data);
  }

  update() {
    const dt = this.clock.getDelta();

    const modelProxies = Object.fromEntries(
      Object.entries(this.models).map(([key, model]) => [key, model.getViewProxy()]),
    );

    const rpcUpdates = [];
    const updates = this.gui.update(dt, modelProxies, this.width, this.height);
    Object.entries(updates).forEach(([key, updateList]) => {
      const model = this.models[key];
      updateList.forEach((update) => {
        if (update.action === 'rpc') {
          rpcUpdates.push(update);
          return;
        }

        model.applyUpdates(updateList);
      });
    });
    rpcUpdates.forEach((u) => this.handleRpc(u));

    if (!this.gui.isActive()) {
      this.renderer.controls.update(dt);
    }
    this.renderer.camera.position.set(0, 0, -5);
    this.renderer.update();

    this.gui.render();
  }

  resize(width, height) {
    this.renderer.resize(width, height);
    this.width = width;
    this.height = height;
  }
}

export default Zenbuforge;
