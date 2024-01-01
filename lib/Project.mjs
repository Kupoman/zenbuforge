import * as Y from 'yjs';

const GLTF_ARRAY_PROPS = [
  'extensionsUsed',
  'extensionsRequired',
  'accessors',
  'animations',
  'asset',
  'buffers',
  'bufferViews',
  'cameras',
  'images',
  'materials',
  'meshes',
  'nodes',
  'samplers',
  'scene',
  'scenes',
  'skins',
  'textures',
  'extensions',
  'extras',
];

const GLTF_MISC_PROPS = [
];

const GLTF_ALL_PROPS = GLTF_ARRAY_PROPS.concat(GLTF_MISC_PROPS);

class Project {
  constructor(options) {
    const _options = options || {};
    this.ydoc = _options.ydoc || new Y.Doc();
    this.ymap = this.ydoc.getMap('data');

    GLTF_ALL_PROPS.forEach((prop) => {
      Object.defineProperty(this, prop, {
        get: () => this.ymap.get(prop),
        set: (value) => {
          this.ymap.set(prop, value);
        },
      });
    });

    this.extensionsUsed = [];
    this.extensionsRequired = [];

    this.accessors = [];
    this.animations = [];
    this.asset = {
      version: '2.0',
    };
    this.buffers = [];
    this.bufferViews = [];
    this.cameras = [];
    this.images = [];
    this.materials = [];
    this.meshes = [];
    this.nodes = [];
    this.samplers = [];
    this.scenes = [];
    this.skins = [];
    this.textures = [];
    this.extensions = {};
    this.extras = {};
  }

  toJSON() {
    return this.ydoc.toJSON().data;
  }

  mergeJSON(jsonData) {
    GLTF_ARRAY_PROPS.forEach((prop) => {
      if (prop in jsonData) {
        jsonData[prop].forEach((newItem) => {
          const searchId = newItem.extensions.ZF_id.id;

          let match = null;
          this[prop].forEach((existingItem) => {
            if (existingItem.extensions.ZF_id.id === searchId) {
              match = existingItem;
            }
          });

          if (match) {
            Object.assign(match, newItem);
          } else {
            this[prop].push(newItem);
          }
        });
      }
    });
  }
}

export default Project;
