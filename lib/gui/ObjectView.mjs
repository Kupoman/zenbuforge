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
    obj.key = selection.key;
    obj.id = selection.id;

    Draw.text('ID', selection.id, { readOnly: true });
    (this.properties).forEach((prop) => {
      const refMap = {};
      if (prop.optional) {
        refMap.None = 'None';
      }
      let value;
      try {
        value = jsonpatch.getValueByPointer(obj, `/${prop.key}`);
      } catch {
        if (!prop.optional) {
          console.warn(`Unable to find property ${prop.key}`);
          console.warn(JSON.stringify(obj, null, 2));
          return;
        }
      }
      if (prop.type === 'ref' || prop.type === 'textureRef') {
        const refItems = jsonpatch.getValueByPointer(model.project, prop.args.key);
        Object.entries(refItems ?? []).forEach(([id, ref]) => {
          refMap[id] = ref.name;
        });
      }
      let newValue = Draw[prop.type](prop.label ?? '', value ?? prop.default, prop.args, refMap);
      if (newValue !== null && typeof value === 'undefined') {
        newValue ??= prop.default;
      }
      if (typeof newValue === 'undefined') {
        results.addUpdate({
          op: 'remove',
          path: `${selection.key}/${selection.id}/${prop.key}`,
        });
      } else if (newValue !== null) {
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

    this.drawActions(model, obj, results);

    this.endDraw();
    return results;
  }
}

export default ObjectView;
