import * as jsonpatch from 'fast-json-patch/index.mjs';
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
    this.observer = null;

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
        this.jsonProxy.extensions ??= {};
        this.jsonProxy.extensions.KHR_lights_punctual ??= { lights: {} };

        this.jsonProxy.asset.version = '2.0';
        this.observer = jsonpatch.observe(this.jsonProxy);
      });
  }

  update() {
    if (!this.isInitialized()) {
      return [];
    }
    return jsonpatch.generate(this.observer);
  }

  patch(patch) {
    jsonpatch.applyPatch(this.jsonProxy, patch, true, true, true);
  }

  toJSON() {
    return this.ymap.toJSON();
  }
}

export default Project;
