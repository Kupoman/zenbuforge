import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';

class ObjectView extends AbstractView {
  constructor(definition, options) {
    super(definition.name, definition.key, options);
    this.properties = definition.properties;
  }

  draw(model) {
    (this.properties ?? []).forEach((prop) => {
      // model is a copy that is safe to modify
      // eslint-disable-next-line no-param-reassign
      model[prop.key] ??= prop.default;
      Draw[prop.type](prop.label ?? '', model, prop.key, prop.args);
    });
    return [];
  }
}

export default ObjectView;
