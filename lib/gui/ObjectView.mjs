import * as jsonpatch from 'fast-json-patch';
import * as ImGui from './extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';
import View from './View.mjs';

class ObjectView extends View {
  constructor(definition, options) {
    super(definition, options);
    this.properties = definition.properties ?? {};
  }

  update(model, windowPos, windowSize) {
    const results = new Results();

    const selection = model.session.selections[0];
    if (typeof selection === 'undefined') {
      return results;
    }

    this.beginDraw(windowPos, windowSize);

    const collection = jsonpatch.getValueByPointer(model, selection.key) ?? {};
    const obj = collection[selection.id];
    if (!obj) {
      console.warn(`Unable to find selection: ${JSON.stringify(selection)}`);
      return results;
    }

    Draw.text('ID', selection.id, { readOnly: true });
    (this.properties).forEach((prop) => {
      const refMap = {};
      const value = jsonpatch.getValueByPointer(obj, `/${prop.key}`) ?? prop.default;
      if (typeof value === 'undefined') {
        console.warn(`Unable to find property ${prop.key}`);
        console.warn(JSON.stringify(obj, null, 2));
        return;
      }
      if (prop.type === 'ref') {
        Object.entries(model.project[prop.args.kind] ?? []).forEach(([id, ref]) => {
          refMap[id] = ref.name;
        });
      }
      const newValue = Draw[prop.type](prop.label ?? '', value, prop.args, refMap);
      if (newValue !== null) {
        results.addUpdate({
          op: 'add',
          path: `${selection.key}/${selection.id}/${prop.key}`,
          value: newValue,
        });
      }
    });

    ImGui.Spacing();
    ImGui.Separator();
    ImGui.Spacing();

    if (ImGui.Button('Delete')) {
      results.addUpdate({
        op: 'replace',
        path: '/session/selections',
        value: [],
      });

      results.addUpdate({
        op: 'remove',
        path: `${selection.key}/${selection.id}`,
      });
    }

    this.drawActions(model, obj, results);

    this.endDraw();
    return results;
  }
}

export default ObjectView;
