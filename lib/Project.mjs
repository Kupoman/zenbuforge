import * as uuid from 'uuid';
import * as Y from 'yjs';
import { IndexeddbPersistence } from 'y-indexeddb';

import * as gltf from './GltfUtils.mjs';
import * as utils from './Utils.mjs';
import YMapJsonHandler from './YMapJsonHandler.mjs';

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
    this.jsonProxy = null;

    this.observers = [];

    this.isInitialized = () => utils.isDefined(this.ymap);
  }

  init() {
    return Promise.resolve()
      .then(() => this.persistence.init())
      .then(() => {
        this.ymap = this.ydoc.getMap('root');
        this.jsonProxy = new Proxy(this.ymap, YMapJsonHandler);
        gltf.MAP_PROPS.forEach((prop) => {
          this.jsonProxy[prop] ??= {};
        });

        gltf.COLLECTION_PROPS.forEach((prop) => {
          this.jsonProxy[prop] ??= {};
        });

        gltf.ARRAY_PROPS.forEach((prop) => {
          this.jsonProxy[prop] ??= [];
        });

        this.jsonProxy.asset.version = '2.0';
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
      const rootKey = event.path[0] ?? '';

      if (rootKey === '') {
        this.observers.forEach((cb) => {
          cb({
            action: 'add',
            key: '',
            id: '',
            data: '',
          });
        });
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
          data = event.target.get(key);
          if (data instanceof Y.AbstractType) {
            data = data.toJSON();
          }
        } else if (value.action === 'update') {
          data = this.ymap.get(rootKey).get(event.path[1]).toJSON();
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

      event.changes.delta.forEach((delta) => {
        this.observers.forEach((cb) => {
          cb({
            action: 'add',
            key: rootKey,
            id: 0,
            data: delta.insert,
          });
        });
      });
    });
  }

  observe(cb) {
    this.observers.push(cb);
  }

  toJSON() {
    return this.ymap.toJSON();
  }
}

export default Project;
