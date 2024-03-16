import * as utils from './Utils.mjs';

class SelectionModel {
  constructor(session, key) {
    this.session = session;
    this.key = key;
    this.project = null;
  }

  async init() {
    return Promise.resolve();
  }

  getViewProxy() {
    if (!utils.isDefined(this.project)) {
      return null;
    }

    const selection = this.session.selections[this.key];
    if (!utils.isDefined(selection)) {
      return null;
    }

    const selected = this.project[this.key].get(selection);
    if (!utils.isDefined(selected)) {
      console.log(`selection not found: ${this.key}/${selection}`);
      console.log(this.project.toJSON());
      return null;
    }

    return selected.toJSON();
  }

  applyUpdates(updates) {
    const selection = this.session.selections[this.key];
    if (!utils.isDefined(this.project) || !utils.isDefined(selection)) {
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
