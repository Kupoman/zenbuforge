import * as Y from 'yjs';

const GLTF_ARRAY_PROPS = [
  'extensionsUsed',
  'extensionsRequired',
];

const GLTF_COLLECTION_PROPS = [
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

function getId(obj) {
  if ('get' in obj) {
    return obj.get('extensions').ZF_id.id;
  }
  return obj?.extensions?.ZF_id?.id;
}

class Project {
  constructor(options) {
    const _options = options || {};
    this.ydoc = _options.ydoc || new Y.Doc();
    this.ymap = this.ydoc.getMap('root');

    GLTF_MAP_PROPS.forEach((prop) => {
      this[prop] = new Y.Map();
      this.ymap.set(prop, this[prop]);
    });

    GLTF_COLLECTION_PROPS.forEach((prop) => {
      this[prop] = new Y.Map();
      this.ymap.set(prop, this[prop]);
    });

    GLTF_ARRAY_PROPS.forEach((prop) => {
      this[prop] = new Y.Array();
      this.ymap.set(prop, this[prop]);
    });

    this.asset.set('version', '2.0');

    this.observers = [];

    this.ymap.observeDeep((events) => this._handleYDocUpdates(events));
  }

  _handleYDocUpdates(events) {
    events.forEach((event) => {
      const rootKey = event.path[0];
      event.changes.keys.forEach((value, key) => {
        let data = null;
        let id = key;
        if (value.action === 'add') {
          data = event.target.get(key).toJSON();
        } else if (value.action === 'update') {
          data = event.target.toJSON();
          id = getId(data);
        }

        this.observers.forEach((cb) => {
          cb({
            action: value.action,
            key: rootKey,
            id,
            data,
          });
        });
      });
    });
  }

  observe(cb) {
    this.observers.push(cb);
  }

  addResource(typeKey, data) {
    const map = new Y.Map();
    Object.entries(data).forEach(([key, value]) => {
      map.set(key, value);
    });
    const id = getId(data);
    this[typeKey].set(id, map);
  }

  toJSON() {
    return this.ydoc.toJSON().root;
  }

  _mergeJSON(jsonData) {
    GLTF_COLLECTION_PROPS.forEach((prop) => {
      if (prop in jsonData) {
        jsonData[prop].forEach((newItem) => {
          const searchId = getId(newItem);

          if (searchId && this[prop].has(searchId)) {
            const match = this[prop].get(searchId);
            Object.entries(newItem).forEach(([key, value]) => {
              match.set(key, value);
            });
          } else {
            this.addResource(prop, newItem);
          }
        });
      }
    });
  }

  mergeJSON(jsonData) {
    this.ydoc.transact(() => this._mergeJSON(jsonData));
  }
}

export default Project;
