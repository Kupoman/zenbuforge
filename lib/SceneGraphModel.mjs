import * as utils from './Utils.mjs';

class SceneGraphModel {
  constructor(session) {
    this.session = session;
    this.project = null;
  }

  async init() {}

  getViewProxy() {
    if (!utils.isDefined(this.project)) {
      return null;
    }

    if (!utils.isDefined(this.project.scenes)) {
      return null;
    }

    const sceneId = this.session.selections.scenes;
    const scene = this.project.scenes.get(sceneId);

    if (!utils.isDefined(scene)) {
      return null;
    }

    const nodes = [];
    const addNode = (id, collection) => {
      const node = this.project.nodes.get(id);
      const children = [];
      (node.get('extensions').ZF_id.children ?? []).forEach((c) => addNode(c, children));
      collection.push({
        name: node.get('name'),
        id: node.get('extensions').ZF_id.id,
        children,
      });
    };
    (scene.get('extensions').ZF_id.nodes ?? []).forEach((n) => addNode(n, nodes));

    return {
      selection: this.session.selections.nodes,
      items: nodes,
    };
  }

  applyUpdates(updates) {
    updates.forEach((update) => {
      if (update.action === 'update' && update.key === 'selection') {
        this.session.selectNode(update.data);
      }
    });
  }
}

export default SceneGraphModel;
