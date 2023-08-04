import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

import Renderer from './Renderer';
import DataState from './DataState';
import Gui from './Gui';

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
        signaling: ['ws://ec2-52-40-65-22.us-west-2.compute.amazonaws.com:80'],
        peerOpts: {
          config: {
            iceServers: [
            ],
          },
        },
      },
    );
    this.yprovider.awareness.setLocalStateField('username', 'Foo');
    this.dataState = new DataState(this.ydoc, this.yprovider);
    this.renderer = new Renderer(canvas);
    this.gui = new Gui(canvas, this.dataState);
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
        this.renderer.scene.add(result.scene);
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
