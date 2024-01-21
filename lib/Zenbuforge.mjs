import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

import Renderer from './Renderer.mjs';
import DataState from './DataState.mjs';
import Gui from './Gui.mjs';

function loadGltf(json, baseUrl) {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.parse(json, baseUrl, resolve, reject);
  });
}

class Zenbuforge {
  constructor(canvas) {
    this.clock = new THREE.Clock();
    this.ydoc = new Y.Doc();
    this.yprovider = new WebrtcProvider(
      'zenbuforge-demo',
      this.ydoc,
      {
        signaling: [
          'ws://localhost:4444',
        ],
        peerOpts: {
          config: {
            iceServers: [
            ],
          },
        },
      },
    );
    this.yprovider.awareness.setLocalStateField(
      'username',
      this.yprovider.awareness.clientID.toString(),
    );
    this.dataState = new DataState(this.ydoc, this.yprovider);
    this.renderer = new Renderer(canvas);
    this.gui = new Gui(
      canvas,
      this.dataState,
      {
        loadProject: (projectData) => {
          console.log('loadProject');
          console.log(projectData);
        },
      },
    );
  }

  async init() {
    await this.gui.init();
  }

  load(jsonStr, baseUrl) {
    return Promise.resolve(jsonStr)
      .then((result) => {
        this.dataState.setGltf(result);
        return result;
      })
      .then((json) => loadGltf(json, baseUrl))
      .then((result) => {
        if (result.scene) {
          this.renderer.scene.add(result.scene);
        }
        const light = new THREE.PointLight();
        light.position.set(0, 1, 0);
        light.intensity = 5;
        this.renderer.scene.add(light);
        return result;
      })
      .then((result) => this.dataState.setDisplayModel(result));
  }

  update() {
    this.gui.update(this.clock.elapsedTime);
    if (!this.gui.isActive()) {
      const dt = this.clock.getDelta();
      this.renderer.controls.update(dt);
    }

    this.renderer.update();
    this.gui.render();
  }

  resize(width, height) {
    this.renderer.resize(width, height);
    this.gui.resize(width, height);
  }
}

export default Zenbuforge;