import { dataUriToBuffer } from 'data-uri-to-buffer';
import * as jsonpatch from 'fast-json-patch';
import * as THREE from 'three';
import GLTFParser from './extern/GLTFParser.mjs';

import CameraControls from './CameraControls.mjs';
import * as GltfUtils from '../GltfUtils.mjs';
import * as utils from '../Utils.mjs';

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
    this.canvas = canvas;
    this.gltf = {};
    this.reset();
  }

  reset() {
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.data = {};
    GltfUtils.COLLECTION_PROPS.forEach((prop) => {
      this.data[prop] = {};
    });

    this.updatePromise = Promise.resolve();

    if (this.canvas) {
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
      this.controls = new CameraControls(this.camera, this.renderer.domElement);
      this.controls.rollSpeed = 2;
    } else {
      this.renderer = null;
      this.controls = null;
    }
  }

  translate(key, data) {
    if (!data) {
      return null;
    }

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
    if (key === 'images') {
      return Promise.resolve(localData);
    }
    if (key === 'samplers') {
      return Promise.resolve(localData);
    }
    if (key === 'textures') {
      const ids = localData.extensions.ZF_id;
      localData.source = 0;
      gltf.images = [this.data.images[ids.source]];
      localData.sampler = 0;
      gltf.samplers = [this.data.samplers[ids.sampler]];

      return parser.loadTexture(0);
    }
    if (key === 'materials') {
      if (utils.isDefined(localData.pbrMetallicRoughness)) {
        const pbr = localData.pbrMetallicRoughness;
        if (utils.isDefined(pbr.baseColorTexture)) {
          const ids = localData.extensions.ZF_id;
          localData.pbrMetallicRoughness.baseColorTexture.index = updateDep(
            ids.pbrMetallicRoughness.baseColorTexture,
            'index',
            'textures',
            'texture',
          );
        }
      }
      return parser.loadMaterial(0);
    }
    if (key === 'meshes') {
      localData.primitives.forEach((prim, i) => {
        const ids = localData.extensions.ZF_id.primitives[i];

        // loadData is a copy that is safe to modify
        // eslint-disable-next-line no-param-reassign
        prim.material = updateDep(ids, 'material', 'materials', 'material');
        // eslint-disable-next-line no-param-reassign
        prim.indices = updateDep(ids, 'indices', 'accessors', 'accessor');
        Object.keys(prim.attributes).forEach((attrKey) => {
          // eslint-disable-next-line no-param-reassign
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

      if (utils.isDefined(localData.translation)) {
        node.position.set(...localData.translation);
      }

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

  _rebuild(patch, dirtySet) {
    let promises = Promise.resolve();
    GltfUtils.COLLECTION_PROPS.forEach((prop) => {
      (dirtySet[prop] ?? []).forEach((id) => {
        const gltf = this.gltf[prop][id];
        promises = promises
          .then(() => this.translate(prop, gltf))
          .then((translated) => {
            const current = this.data[prop][id];
            if (!translated) {
              delete this.data[prop][id];
              return;
            }
            if (!current) {
              this.data[prop][id] = translated;
              return;
            }
            current.copy(translated);
          });
      });
    });

    this.updatePromise = this.updatePromise.then(() => promises);
    return this.updatePromise;
  }

  resize(width, height) {
    if (this.renderer) {
      this.renderer.setSize(width, height);
    }
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  updateGltf(gltf) {
    this.reset();
    this.gltf = jsonpatch.deepClone(gltf);
    const patch = [];
    const dirtySet = {};

    function updateEntries(prop, collection) {
      Object.entries(collection ?? []).forEach(([id, value]) => {
        dirtySet[prop].add(id);
        patch.push({
          op: 'add',
          path: `/${prop}/${id}`,
          value,
        });
      });
    }
    GltfUtils.COLLECTION_PROPS.forEach((prop) => {
      dirtySet[prop] = new Set();
      updateEntries(prop, this.gltf[prop]);
    });
    return this._rebuild(patch, dirtySet);
  }

  updateGltfDelta(patch) {
    jsonpatch.applyPatch(this.gltf, patch, true, true, true);

    const dirtySet = {};
    patch.forEach((update) => {
      const [, key, id] = update.path.split('/');
      dirtySet[key] ??= new Set();
      dirtySet[key].add(id);
    });

    return this._rebuild(patch, dirtySet);
  }

  update(sceneId) {
    const scene = this.data.scenes[sceneId];
    if (this.renderer && scene) {
      this.renderer.render(scene, this.camera);
    }
  }
}

export default Renderer;
