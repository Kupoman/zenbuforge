import { dataUriToBuffer } from 'data-uri-to-buffer';
import * as jsonpatch from 'fast-json-patch';
import * as THREE from 'three';
import { GLTFParser, GLTFLightsExtension } from './extern/GLTFParser.mjs';

import CameraControls from './CameraControls.mjs';

function isDefined(i) {
  return typeof i !== 'undefined' && i !== null;
}

export const COLLECTION_PROPS = [
  'buffers',
  'bufferViews',
  'accessors',

  'animations',
  'skins',

  'images',
  'samplers',
  'textures',

  'materials',
  'meshes',
  'cameras',
  'nodes',
  'scenes',
];

export function getId(obj) {
  return obj?.extras?.id;
}

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
    this.raycaster = new THREE.Raycaster();
    this.gltf = {};
    this.data = {};
    COLLECTION_PROPS.forEach((prop) => {
      this.data[prop] = {};
    });
    this.data.lights = {};
    this.reset();
  }

  reset() {
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    Object.entries(this.data).forEach(([key, collection]) => {
      Object.values(collection).forEach((obj) => {
        if ('dispose' in obj) {
          obj.dispose();
        }
      });
      this.data[key] = {};
    });

    this.updatePromise = Promise.resolve();

    if (this.canvas) {
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.toneMapping = THREE.NeutralToneMapping;
      this.renderer.toneMappingExposure = 0.01;
      this.renderer.physicallyCorrectLights = true;
      this.controls = new CameraControls(this.camera, this.renderer.domElement);
      this.controls.rollSpeed = 2;
      this.controls.movementSpeed = 50;
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

    if (key === 'lights') {
      const _parser = {
        cache: {
          get: () => false,
          add: () => null,
        },
        createUniqueName: () => getId(localData),
        json: {
          extensions: {
            KHR_lights_punctual: {
              lights: [localData],
            },
          },
        },
      };
      const lightParser = new GLTFLightsExtension(_parser);
      return lightParser._loadLight(0);
    }
    if (key === 'buffers') {
      return Promise.resolve(dataUriToBuffer(data.uri).buffer);
    }
    if (key === 'bufferViews') {
      const ids = localData;
      localData.buffer = updateDep(ids, 'buffer', 'buffers', 'buffer');
      return parser.loadBufferView(0);
    }
    if (key === 'accessors') {
      const ids = localData;
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
      const ids = localData;
      gltf.images = [this.data.images[ids.source]];
      localData.source = 0;
      gltf.samplers = [this.data.samplers[ids.sampler]];
      localData.sampler = 0;

      return parser.loadTexture(0);
    }
    if (key === 'materials') {
      if (isDefined(localData.pbrMetallicRoughness)) {
        const pbr = localData.pbrMetallicRoughness;
        if (isDefined(pbr.baseColorTexture)) {
          localData.pbrMetallicRoughness.baseColorTexture.index = updateDep(
            localData.pbrMetallicRoughness.baseColorTexture,
            'index',
            'textures',
            'texture',
          );
        }
        if (isDefined(pbr.metallicRoughnessTexture)) {
          localData.pbrMetallicRoughness.metallicRoughnessTexture.index = updateDep(
            localData.pbrMetallicRoughness.metallicRoughnessTexture,
            'index',
            'textures',
            'texture',
          );
        }
      }

      if (isDefined(localData.normalTexture)) {
        localData.normalTexture.index = updateDep(
          localData.normalTexture,
          'index',
          'textures',
          'texture',
        );
      }

      if (isDefined(localData.occlusionTexture)) {
        localData.occlusionTexture.index = updateDep(
          localData.occlusionTexture,
          'index',
          'textures',
          'texture',
        );
      }

      if (isDefined(localData.emissiveTexture)) {
        localData.emissiveTexture.index = updateDep(
          localData.emissiveTexture,
          'index',
          'textures',
          'texture',
        );
      }

      return parser.loadMaterial(0);
    }
    if (key === 'meshes') {
      localData.primitives.forEach((prim, i) => {
        const ids = localData.primitives[i];

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
      if (isDefined(localData.mesh)) {
        node.add(this.data.meshes[localData.mesh]);
      }

      if (isDefined(localData?.extensions?.KHR_lights_punctual?.light)) {
        node.add(this.data.lights[localData.extensions.KHR_lights_punctual.light]);
      }

      (localData.children || []).forEach((child) => {
        let ref = this.data.nodes[child];
        if (!isDefined(ref)) {
          ref = new THREE.Group();
          this.data.nodes[child] = ref;
        }
        node.add(ref);
      });

      if (isDefined(localData.translation)) {
        node.position.set(...localData.translation);
      }

      if (isDefined(localData.rotation)) {
        node.quaternion.set(...localData.rotation);
      }

      if (isDefined(localData.scale)) {
        node.scale.set(...localData.scale);
      }

      node.userData.id = localData.extras.id;

      return Promise.resolve(node);
    }
    if (key === 'scenes') {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xcccccc);
      (localData.nodes || []).forEach((id) => {
        scene.add(this.data.nodes[id]);
      });

      return Promise.resolve(scene);
    }

    return Promise.resolve({});
  }

  _lookupGltf(prop, id) {
    if (prop === 'lights') {
      return this.gltf.extensions.KHR_lights_punctual.lights[id];
    }
    return this.gltf[prop][id];
  }

  _rebuild(dirtySet) {
    let promises = Promise.resolve();

    const rebuildCollection = (prop) => {
      (dirtySet[prop] ?? []).forEach((id) => {
        const gltf = this._lookupGltf(prop, id);
        promises = promises
          .then(() => this.translate(prop, gltf))
          .then((translated) => {
            const current = this.data[prop][id];
            if (!translated && current) {
              if ('dispose' in current) {
                current.dispose();
              }
              delete this.data[prop][id];
              return;
            }
            if (!current && translated) {
              this.data[prop][id] = translated;
              return;
            }

            if (current && translated) {
              if (current.constructor !== translated.constructor) {
                const parent = current.parent;
                if (parent) {
                  parent.remove(current);
                  parent.add(translated);
                }
                current.dispose();
                this.data[prop][id] = translated;
                return;
              }

              current.copy(translated, false);
              if ('children' in current) {
                current.clear();
                translated.children.forEach((child) => current.add(child));
              }
              if ('dispose' in translated) {
                translated.dispose();
              }
            }
          });
      });
    };
    rebuildCollection('lights');
    COLLECTION_PROPS.forEach((prop) => rebuildCollection(prop));

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
    const dirtySet = {};

    const updateEntries = (prop, collection) => {
      dirtySet[prop] = new Set();
      Object.keys(collection ?? []).forEach((id) => {
        dirtySet[prop].add(id);
      });
    };
    updateEntries('lights', this.gltf?.extensions?.KHR_lights_punctual?.lights);
    COLLECTION_PROPS.forEach((prop) => {
      updateEntries(prop, this.gltf[prop]);
    });

    return this._rebuild(dirtySet);
  }

  updateGltfDelta(patch) {
    jsonpatch.applyPatch(this.gltf, patch, true, true, true);

    const dirtySet = {};
    patch.forEach((update) => {
      const path = update.path.replace('/extensions/KHR_lights_punctual');
      const [, key, id] = path.split('/');
      dirtySet[key] ??= new Set();
      dirtySet[key].add(id);
    });

    return this._rebuild(dirtySet);
  }

  update(sceneId, width, height) {
    this.resize(width, height);
    const scene = this.data.scenes[sceneId];
    if (this.renderer && scene) {
      this.renderer.render(scene, this.camera);
    }
  }

  pick(viewportPos) {
    const normalizedPosition = {
      x: viewportPos.x * 2 - 1,
      y: viewportPos.y * -2 + 1,
    };
    const camera = this.camera;
    if (!camera) {
      return null;
    }
    const scene = Object.values(this.data.scenes ?? [])[0];
    if (!scene) {
      return null;
    }
    this.raycaster.setFromCamera(normalizedPosition, camera);
    const results = this.raycaster.intersectObjects(scene.children);
    if (results.length === 0) {
      return null;
    }
    const mesh = results[0].object;
    const node = mesh.parent;
    const { id } = node.userData;
    return id;
  }
}

export default Renderer;
