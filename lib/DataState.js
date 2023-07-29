class DataState {
  constructor() {
    this._isInitialized = false;
  }

  isInitialized() {
    return this._isInitialized;
  }

  init(gltf) {
    Object.assign(this, gltf);
    this._isInitialized = true;
  }
}

export default DataState;
