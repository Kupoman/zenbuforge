import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';

class NodeView extends AbstractView {
  constructor() {
    super('Node', 'nodes');
  }

  draw(model) {
    model.name ??= '';
    Draw.Text('Name', model, 'name');

    Draw.Vec3('Position', model, 'translation', 0.1, null, null);
    Draw.Vec4('Rotation', model, 'rotation');
    Draw.Vec3('Scale', model, 'scale');
    Draw.Json(model);

    return [];
  }
}

export default NodeView;
