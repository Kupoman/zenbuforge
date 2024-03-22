import TreeView from './TreeView.mjs';
import * as Draw from './DrawProperty.mjs';

class SceneGraphView extends TreeView {
  constructor(options) {
    super('Scene Graph', 'sceneGraph', options);
  }

  draw(model) {
    const updates = [];

    // model is a copy that is safe to modify
    // eslint-disable-next-line no-param-reassign
    model.name ??= '';
    Draw.text('Name', model, 'name');
    return updates.concat(super.draw(model));
  }
}

export default SceneGraphView;
