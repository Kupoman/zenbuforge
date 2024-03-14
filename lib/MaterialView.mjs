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
    Draw.Color4('Base Color Factor', pbrProps, 'baseColorFactor');
    Draw.Scalar('Roughness Factor', pbrProps, 'roughnessFactor');
    Draw.Scalar('Metallic Factor', pbrProps, 'metallicFactor');
    Draw.Json(model);

    return [];
  }
}

export default MaterialView;
