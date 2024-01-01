import BaseWrapper from './BaseWrapper.mjs';

import Asset from './Asset.mjs';
import Node from './Node.mjs';
import User from './User.mjs';

class DataState {
  constructor(ydoc, yprovider) {
    this._isGltfAdded = false;
    this._isDisplayAdded = false;
    this.ydoc = ydoc;
    this.yprovider = yprovider;
    this.ymap = this.ydoc.getMap('test');
  }

  isInitialized() {
    return this._isGltfAdded && this._isDisplayAdded;
  }

  getUsers() {
    const iter = Array.from(
      this.yprovider.awareness.getStates(),
      ([k, v]) => [
        k,
        Object.assign(new User(v), { isLocal: k === this.yprovider.awareness.clientID }),
      ],
    );
    return new Map(iter);
  }

  setGltf(gltf) {
    Object.assign(this, gltf);

    this.asset = new Asset(this.asset || {}, '');
    this.scenes = (this.scenes || []).map((item, i) => new BaseWrapper(item, i.toString()));
    this.nodes = (this.nodes || []).map((item, i) => new Node(item, i.toString(), this.ymap));
    this.meshes = (this.meshes || []).map((item, i) => new BaseWrapper(item, i.toString()));
    this.materials = (this.materials || []).map((item, i) => new BaseWrapper(item, i.toString()));
    this.textures = (this.textures || []).map((item, i) => new BaseWrapper(item, i.toString()));
    this.cameras = (this.cameras || []).map((item, i) => new BaseWrapper(item, i.toString()));
    this._isGltfAdded = true;
  }

  setDisplayModel(gltf) {
    return Promise.resolve()
      .then(() => gltf.parser.associations)
      .then((associations) => {
        associations.forEach((gltfRef, displayData) => {
          if (displayData.isObject3D && typeof gltfRef.nodes !== 'undefined') {
            this.nodes[gltfRef.nodes].display = displayData;
          }
        });
      })
      .then(() => {
        this._isDisplayAdded = true;
      });
  }
}

export default DataState;
