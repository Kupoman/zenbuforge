import * as uuid from 'uuid';
import * as Y from 'yjs';
import { IndexeddbPersistence } from 'y-indexeddb';

import * as gltf from './GltfUtils.mjs';
import * as utils from './Utils.mjs';

class Persistence {
  constructor(id, ydoc) {
    this.id = id;
    this.ydoc = ydoc;
    this._ = null;
  }

  init() {
    this._ = new IndexeddbPersistence(this.id, this.ydoc);
    const promise = new Promise((resolve) => {
      this._.on('synced', () => {
        resolve();
      });
    });

    return promise;
  }
}

class Project {
  constructor(options) {
    const _options = options || {};
    this.ydoc = _options.ydoc || new Y.Doc();
    this.id = _options.id || uuid.v4();
    this.persistence = _options.persistence || new Persistence(this.id, this.ydoc);

    this.ymap = null;

    this.observers = [];

    this.isInitialized = () => utils.isDefined(this.ymap);

    this._mergeCallbacks = {};
    this.ydoc.on('afterTransaction', (transaction) => {
      const id = transaction.origin;
      const cb = this._mergeCallbacks[id];
      if (cb) {
        delete this._mergeCallbacks[id];
        cb();
      }
    });
  }

  init() {
    return Promise.resolve()
      .then(() => this.persistence.init())
      .then(() => {
        this.ymap = this.ydoc.getMap('root');
        gltf.MAP_PROPS.forEach((prop) => {
          if (this.ymap.has(prop)) {
            this[prop] = this.ymap.get(prop);
          } else {
            this[prop] = new Y.Map();
            this.ymap.set(prop, this[prop]);
          }
        });

        gltf.COLLECTION_PROPS.forEach((prop) => {
          if (this.ymap.has(prop)) {
            this[prop] = this.ymap.get(prop);
          } else {
            this[prop] = new Y.Map();
            this.ymap.set(prop, this[prop]);
          }
        });

        gltf.ARRAY_PROPS.forEach((prop) => {
          if (this.ymap.has(prop)) {
            this[prop] = this.ymap.get(prop);
          } else {
            this[prop] = new Y.Array();
            this.ymap.set(prop, this[prop]);
          }
        });

        this.asset.set('version', '2.0');
        this.ymap.observeDeep((events) => this._handleYDocUpdates(events));
      });
  }

  getHistory() {
    const events = [];

    gltf.COLLECTION_PROPS.forEach((prop) => {
      this[prop].forEach((value, key) => {
        events.push({
          action: 'add',
          key: prop,
          id: key,
          data: value.toJSON(),
        });
      });
    });

    return events;
  }

  _handleYDocUpdates(events) {
    events.forEach((event) => {
      const rootKey = event.path[0];

      if (!utils.isDefined(rootKey)) {
        return;
      }

      if (event.path.length === 2) {
        this.observers.forEach((cb) => {
          cb({
            action: 'update',
            key: event.path[0],
            id: event.path[1],
            data: event.target.toJSON(),
          });
        });
        return;
      }

      event.changes.keys.forEach((value, key) => {
        let data = null;
        let id = key;
        if (value.action === 'add') {
          data = event.target.get(key).toJSON();
        } else if (value.action === 'update') {
          data = event.target.toJSON();
          id = gltf.getId(data);
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

    const id = gltf.getId(data);
    this[typeKey].set(id, map);
  }

  toJSON() {
    return this.ydoc.toJSON().root;
  }

  _mergeJSON(jsonData) {
    const normalized = JSON.parse(JSON.stringify(jsonData));
    gltf.addIdExtension(normalized);
    gltf.initNames(normalized);
    gltf.ensureTRSNodes(normalized);

    gltf.COLLECTION_PROPS.forEach((prop) => {
      (normalized[prop] || []).forEach((newItem) => {
        const searchId = gltf.getId(newItem);

        if (searchId && this[prop].has(searchId)) {
          const match = this[prop].get(searchId);
          Object.entries(newItem).forEach(([key, value]) => {
            match.set(key, value);
          });
        } else {
          this.addResource(prop, newItem);
        }
      });
    });
  }

  mergeJSON(jsonData) {
    const id = uuid.v4();
    const promise = new Promise((resolve) => {
      this._mergeCallbacks[id] = () => resolve(this);
    });

    this.ydoc.transact(
      () => this._mergeJSON(jsonData || {}),
      id,
    );

    return promise;
  }
}

export default Project;
