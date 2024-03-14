import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';

class MaterialView extends AbstractView {
  constructor() {
    super('Material', 'materials');
  }

  draw(model) {
    model.name ??= '';
    Draw.Text('Name', model, 'name');

    const pbrProps = model.pbrMetallicRoughness;
    Draw.Vec4('Color', pbrProps, 'baseColorFactor');
    Draw.Json(model);
  }
}

export default MaterialView;
