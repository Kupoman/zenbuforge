import * as jsonpatch from 'fast-json-patch';

class Collection {
  constructor(create, update, destroy) {
    this.createResource = create;
    this.updateResource = update;
    this.destroyResource = destroy;
    this.resources = {};
  }

  get(id) {
    return this.resources[id];
  }

  update(id, resourceJson, translator, fullJson) {
    let resource = this.get(id);
    if (!resource) {
      resource = this.createResource();
      this.resources[id] = resource;
    }
    this.updateResource(resource, resourceJson, translator, fullJson);
  }

  destroyId(id) {
    const resource = this.get(id);
    this.destroyResource(resource);
    delete this.resources[id];
  }

  destroy() {
    Object.values(this.resources).forEach((r) => this.destroyResource(r));
    this.resources = {};
  }
}

class Translator {
  constructor() {
    this.gltf = {};
    this.collections = {};

    this.warnings = [];
  }

  destroy() {
    Object.values(this.collections).forEach((c) => c.destroy());
  }

  registerCollection(key, createFunc, updateFunc, destroyFunc) {
    this.collections[key] = new Collection(createFunc, updateFunc, destroyFunc);
  }

  setGltf(gltf) {
    this.gltf = JSON.parse(JSON.stringify(gltf));
    Object.values(this.collections).forEach((c) => c.destroy());

    Object.entries(this.collections).forEach(([key, collection]) => {
      let gltfCollection = null;
      try {
        gltfCollection = jsonpatch.default.getValueByPointer(gltf, key);
      } catch (e) { }

      if (!gltfCollection) {
        return;
      }
      Object.entries(gltfCollection).forEach(([id, gltfResource]) => {
        collection.update(id, gltfResource, this, gltf);
      });
    });
  }

  applyJsonPatch(patch) {
    if (typeof patch === 'undefined' || patch === null) {
      throw new TypeError('Missing required patch argument');
    }

    jsonpatch.default.applyPatch(this.gltf, patch, true, true, true);
    (patch ?? []).forEach((change) => {
      let collectionKey = null;
      Object.keys(this.collections).forEach((key) => {
        if (change.path.startsWith(key)) {
          collectionKey = key;
        }
      });

      if (collectionKey === null) {
        this.warnings.push(`Unable to find a collection for path ${change.path}`);
        return;
      }

      const collection = this.collections[collectionKey];

      const pathParts = change.path.split('/');
      const keyLength = collectionKey.split('/').length;

      const id = pathParts[keyLength + 0] ?? '';

      // Base collection update, we do not need to do anything
      if (id === '') {
        return;
      }

      if (
        change.op === 'add'
        || change.op === 'replace'
        || (change.op === 'remove' && pathParts.length > keyLength + 1)
      ) {
        const resourceJson = jsonpatch.default.getValueByPointer(this.gltf, collectionKey)[id];
        collection.update(id, resourceJson, this);
      } else if (change.op === 'remove') {
        collection.destroyId(id);
      }
    });
  }

  getWarnings() {
    const { warnings } = this;
    this.warnings = [];
    return warnings;
  }
}

export default Translator;
