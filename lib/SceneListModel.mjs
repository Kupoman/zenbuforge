import * as utils from './Utils.mjs';

class SceneListModel {
  constructor(session) {
    this.session = session;
    this.project = null;
  }

  async init() {
    return Promise.resolve();
  }

  getViewProxy() {
    if (!utils.isDefined(this.project)) {
      return null;
    }

    if (!utils.isDefined(this.project.scenes)) {
      return null;
    }

    const items = [];
    this.project.scenes.forEach((value, key) => {
      items.push({
        id: key,
        name: value.get('name'),
      });
    });

    return {
      selection: this.session.selections.scenes,
      items,
    };
  }

  applyUpdates(updates) {
    updates.forEach((update) => {
      if (update.action === 'update' && update.key === 'selection') {
        this.session.selectScene(update.data);
      }
    });
  }
}

export default SceneListModel;
