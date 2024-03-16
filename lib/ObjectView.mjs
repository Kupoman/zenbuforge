import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';

class ObjectView extends AbstractView {
  constructor(definition) {
    super(definition.name, definition.key);
    this.properties = definition.properties;
  }

  draw(model) {
    (this.properties ?? []).forEach((prop) => {
      model[prop.key] ??= prop.default;
      Draw[prop.type](prop.label ?? '', model, prop.key, prop.args);
    });
    return [];
  }
}

export default ObjectView;
