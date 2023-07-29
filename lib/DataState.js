import BaseWrapper from './BaseWrapper';

import Asset from './Asset';
import Node from './Node';

class DataState {
  constructor() {
    this._isGltfAdded = false;
    this._isDisplayAdded = false;
  }

  isInitialized() {
    return this._isGltfAdded && this._isDisplayAdded;
  }

  setGltf(gltf) {
    Object.assign(this, gltf);

    this.asset = new Asset(this.asset || {}, '');
    this.scenes = (this.scenes || []).map((item, i) => new BaseWrapper(item, i.toString()));
    this.nodes = (this.nodes || []).map((item, i) => new Node(item, i.toString()));
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
