import * as utils from './Utils.mjs';

class SelectionModel {
  constructor(key) {
    this.key = key;
    this.project = null;
    this.selection = null;
  }

  async init() {
    return Promise.resolve();
  }

  getViewProxy() {
    if (!utils.isDefined(this.project)) {
      console.log('project is undefined');
      return null;
    }

    if (!utils.isDefined(this.selection)) {
      console.log('selection is undefined');
      return null;
    }

    const selected = this.project[this.key].get(this.selection);
    if (!utils.isDefined(selected)) {
      console.log(`selection not found: ${this.key}/${this.selection}`);
      console.log(this.project.toJSON());
      return null;
    }

    return selected.toJSON();
  }

  applyUpdates(updates) {
    if (!utils.isDefined(this.project) || !utils.isDefined(this.selection)) {
      return;
    }

    updates.forEach((update) => {
      if (update.action !== 'update') {
        return;
      }

      const gltf = {
        [this.key]: [update.data],
      };

      this.project.mergeJSON(gltf);
    });
  }
}

export default SelectionModel;
