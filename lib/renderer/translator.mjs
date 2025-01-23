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
    this.applyJsonPatch([{
      op: 'replace',
      path: '',
      value: JSON.parse(JSON.stringify(gltf)),
    }]);
  }

  _applyChange(change) {
    // Root update
    if (change.path === '') {
      const newPatch = Object.keys(this.collections).flatMap((key) => {
        let gltfCollection = null;
        try {
          gltfCollection = jsonpatch.default.getValueByPointer(this.gltf, key);
        } catch (e) {
          return [];
        }

        return [{
          op: change.op,
          path: key,
          value: gltfCollection,
        }];
      });
      newPatch.forEach((c) => this._applyChange(c));
      return;
    }

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

    // Collection update
    if (id === '') {
      const newKeys = new Set(Object.keys(change.value ?? []));
      const currentKeys = new Set(Object.keys(collection.resources));

      const createKeys = newKeys.difference(currentKeys);
      createKeys.forEach((key) => collection.update(key, change.value[key], this));

      const updateKeys = newKeys.intersection(currentKeys);
      updateKeys.forEach((key) => collection.update(key, change.value[key], this));

      const destroyKeys = currentKeys.difference(newKeys);
      destroyKeys.forEach((key) => collection.destroyId(key));

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
  }

  applyJsonPatch(patch) {
    if (typeof patch === 'undefined' || patch === null) {
      throw new TypeError('Missing required patch argument');
    }

    this.gltf = jsonpatch.default.applyPatch(this.gltf, patch, true, true, true).newDocument;

    (patch ?? []).forEach((change) => {
      this._applyChange(change);
    });
  }

  getWarnings() {
    const { warnings } = this;
    this.warnings = [];
    return warnings;
  }
}

export default Translator;
