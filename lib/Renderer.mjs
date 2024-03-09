import { dataUriToBuffer } from 'data-uri-to-buffer';
import * as THREE from 'three';
import { GLTFParser } from 'three/examples/jsm/loaders/GLTFLoader.js';

import CameraControls from './CameraControls.mjs';
import * as GltfUtils from './GltfUtils.mjs';
import * as utils from './Utils.mjs';

const GLTF_STUB = JSON.stringify({
  asset: {
    version: '2.0',
  },
  scene: 0,
  scenes: [
    {
      nodes: [],
    },
  ],
});

class Renderer {
  constructor(canvas) {
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xcccccc);
    this.data = {};
    GltfUtils.COLLECTION_PROPS.forEach((prop) => {
      this.data[prop] = {};
    });

    this.updatePromise = Promise.resolve();

    if (canvas) {
      this.renderer = new THREE.WebGLRenderer({ canvas });
      this.controls = new CameraControls(this.camera, this.renderer.domElement);
      this.controls.rollSpeed = 2;
    } else {
      this.renderer = null;
      this.controls = null;
    }
  }

  translate(key, data) {
    const gltf = JSON.parse(GLTF_STUB);
    const localData = JSON.parse(JSON.stringify(data));
    gltf[key] = [localData];
    const parser = new GLTFParser(gltf);

    const updateDep = (ids, idKey, dataKey, cacheType) => {
      const id = ids[idKey];
      const dep = this.data[dataKey][id];
      parser.cache.add(`${cacheType}:${id}`, Promise.resolve(dep));
      gltf[dataKey] = gltf[dataKey] || {};
      gltf[dataKey][id] = {};
      return id;
    };

    if (key === 'buffers') {
      return Promise.resolve(dataUriToBuffer(data.uri).buffer);
    }
    if (key === 'bufferViews') {
      const ids = localData.extensions.ZF_id;
      localData.buffer = updateDep(ids, 'buffer', 'buffers', 'buffer');
      return parser.loadBufferView(0);
    }
    if (key === 'accessors') {
      const ids = localData.extensions.ZF_id;
      localData.bufferView = updateDep(ids, 'bufferView', 'bufferViews', 'bufferView');
      return parser.loadAccessor(0);
    }
    if (key === 'materials') {
      return parser.loadMaterial(0);
    }
    if (key === 'meshes') {
      localData.primitives.forEach((prim, i) => {
        const ids = localData.extensions.ZF_id.primitives[i];

        prim.material = updateDep(ids, 'material', 'materials', 'material');
        prim.indices = updateDep(ids, 'indices', 'accessors', 'accessor');
        Object.keys(prim.attributes).forEach((attrKey) => {
          prim.attributes[attrKey] = updateDep(ids.attributes, attrKey, 'accessors', 'accessor');
        });
      });
      return parser.loadMesh(0);
    }
    if (key === 'nodes') {
      const node = new THREE.Group();
      if (utils.isDefined(localData.mesh)) {
        node.add(this.data.meshes[localData.extensions.ZF_id.mesh]);
      }

      (localData.extensions.ZF_id.children || []).forEach((child) => {
        let ref = this.data.nodes[child];
        if (!utils.isDefined(ref)) {
          ref = new THREE.Group();
          this.data.nodes[child] = ref;
        }
        node.add(ref);
      });
      return Promise.resolve(node);
    }
    if (key === 'scenes') {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xcccccc);
      (localData.extensions.ZF_id.nodes || []).forEach((id) => {
        scene.add(this.data.nodes[id]);
      });
      return Promise.resolve(scene);
    }

    return Promise.resolve({});
  }

  handleUpdate(update) {
    if (update.action === 'delete') {
      delete this.data[update.key][update.id];
      return Promise.resolve();
    }

    let current = null;
    this.updatePromise = this.updatePromise
      .then(() => current = this.data[update.key][update.id])
      .then(() => this.translate(update.key, update.data))
      .then((translated) => {
        if (current) {
          current.copy(translated);
        }
        this.data[update.key][update.id] = translated;
      });

    return this.updatePromise;
  }

  resize(width, height) {
    if (this.renderer) {
      this.renderer.setSize(width, height);
    }
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update() {
    const scene = Object.values(this.data.scenes)[0];
    if (this.renderer && scene) {
      this.renderer.render(scene, this.camera);
    }
  }
}

export default Renderer;
