import * as THREE from 'three';

import Project from './Project.mjs';
import Renderer from './Renderer.mjs';
import Gui from './Gui.mjs';

class Zenbuforge {
  constructor(canvas) {
    this.project = null;
    this.canvas = canvas;

    this.clock = new THREE.Clock();
    this.renderer = new Renderer(canvas);
    this.gui = new Gui(
      canvas,
      this.project,
      {
        loadProject: (projectData) => this.loadProject(projectData.id),
        importUrl: (url) => this.loadUrl(url),
      },
    );
  }

  async init() {
    await this.gui.init();
  }

  loadProject(id) {
    this.project = new Project({ id });
    this.renderer = new Renderer(this.canvas);
    this.gui.dataState = this.project;
    this.project.observe((update) => this.renderer.handleUpdate(update));
    return Promise.resolve()
      .then(() => this.project.init())
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

  update() {
    this.gui.update(this.clock.elapsedTime);
    if (!this.gui.isActive()) {
      const dt = this.clock.getDelta();
      this.renderer.controls.update(dt);
    }

    this.renderer.camera.position.set(0, 0, -5);
    this.renderer.update();
    this.gui.render();
  }

  resize(width, height) {
    this.renderer.resize(width, height);
    this.gui.resize(width, height);
  }
}

export default Zenbuforge;
