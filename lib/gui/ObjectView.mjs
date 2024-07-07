import * as jsonpatch from 'fast-json-patch';
import * as ImGui from './extern/imgui.mjs';

import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';

class ObjectView extends AbstractView {
  constructor(definition, options) {
    super(definition.name, definition.key, options);
    this.properties = definition.properties;
  }

  draw(model) {
    const results = new Results();

    const selection = model.session.selections[0];
    if (typeof selection === 'undefined') {
      return results;
    }

    const obj = model.project[selection.kind][selection.id];
    (this.properties ?? []).forEach((prop) => {
      const value = jsonpatch.getValueByPointer(obj, `/${prop.key}`) ?? prop.default;
      const newValue = Draw[prop.type](prop.label ?? '', value, prop.args);
      if (newValue) {
        results.addUpdate({
          op: 'add',
          path: `/project/${selection.kind}/${selection.id}/${prop.key}`,
          value: newValue,
        });
      }
    });

    if (ImGui.Button('Delete')) {
      results.addUpdate({
        op: 'replace',
        path: '/session/selections',
        value: [],
      });

      results.addUpdate({
        op: 'remove',
        path: `/project/${selection.kind}/${selection.id}`,
      });
    }
    return results;
  }
}

export default ObjectView;
