import * as Y from 'yjs';

const GLTF_ARRAY_PROPS = [
  'extensionsUsed',
  'extensionsRequired',
  'accessors',
  'animations',
  'buffers',
  'bufferViews',
  'cameras',
  'images',
  'materials',
  'meshes',
  'nodes',
  'samplers',
  'scenes',
  'skins',
  'textures',
];

const GLTF_MAP_PROPS = [
  'asset',
  'extensions',
  'extras',
];

const GLTF_VALUE_PROPS = [
  'scene',
];

class Project {
  constructor(options) {
    const _options = options || {};
    this.ydoc = _options.ydoc || new Y.Doc();
    this.ymap = this.ydoc.getMap('root');

    GLTF_MAP_PROPS.forEach((prop) => {
      this[prop] = new Y.Map();
      this.ymap.set(prop, this[prop]);
    });

    GLTF_ARRAY_PROPS.forEach((prop) => {
      this[prop] = new Y.Array();
      this.ymap.set(prop, this[prop]);
    });

    this.asset.set('version', '2.0');
  }

  addResource(typeKey, data) {
    const map = new Y.Map();
    Object.entries(data).forEach(([key, value]) => {
      map.set(key, value);
    });
    this[typeKey].push([map]);
  }

  toJSON() {
    return this.ydoc.toJSON().root;
  }

  mergeJSON(jsonData) {
    GLTF_ARRAY_PROPS.forEach((prop) => {
      if (prop in jsonData) {
        jsonData[prop].forEach((newItem) => {
          const searchId = newItem.extensions.ZF_id.id;

          let match = null;
          this[prop].forEach((existingItem) => {
            const existingId = existingItem.get('extensions').ZF_id.id;
            if (existingId === searchId) {
              match = existingItem;
            }
          });

          if (match) {
            Object.assign(match, newItem);
          } else {
            this.addResource(prop, newItem);
          }
        });
      }
    });
  }
}

export default Project;
