import * as ImGui from '../extern/imgui.mjs';

import TreeView from './TreeView.mjs';
import * as Draw from './DrawProperty.mjs';

class SceneGraphView extends TreeView {
  constructor(options) {
    super('Scene Graph', 'sceneGraph', options);
  }

  draw(model) {
    const updates = [];

    model.name ??= '';
    Draw.text('Name', model, 'name');
    return updates.concat(super.draw(model));
  }
}

export default SceneGraphView;
