import * as utils from './Utils.mjs';

class Session {
  constructor() {
    this.project = null;
    this.selections = {
      scenes: null,
    };
    this._resetSelections();
  }

  _resetSelections() {
    this.selections.samplers = null;
    this.selections.textures = null;
    this.selections.materials = null;
    this.selections.meshes = null;
    this.selections.nodes = null;
  }

  async init() {}

  getViewProxy() {
    return JSON.parse(JSON.stringify(this));
  }

  selectScene(id) {
    this._resetSelections();

    this.selections.scenes = id;
  }

  _selectMaterial(id) {
    this.selections.materials = id;
  }

  selectMaterial(id) {
    this._resetSelections();
    this._selectMaterial(id);
  }

  _selectMesh(id) {
    this.selections.meshes = id;

    const mesh = this.project.meshes.get(id);
    const prim = mesh.get('primitives')[0];
    if ('material' in prim) {
      this._selectMaterial(mesh.get('extensions').ZF_id.primitives[0].material);
    }
  }

  selectMesh(id) {
    this._resetSelections();
    this._selectMesh(id);
  }

  selectNode(id) {
    this._resetSelections();

    this.selections.nodes = id;
    const node = this.project.nodes.get(id);
    if (node.has('mesh')) {
      this._selectMesh(node.get('extensions').ZF_id.mesh);
    }
  }
}

export default Session;
