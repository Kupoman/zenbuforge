import * as jsonpatch from 'fast-json-patch';
import * as ImGui from './extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';

class ObjectView {
  constructor(definition, options) {
    const _options = options ?? {};
    this.name = definition.name;
    this.key = definition.key;
    this.size = _options.size ?? 1;
    this.isVisible = true;
    this.properties = definition.properties;
  }

  update(model, windowPos, windowSize) {
    const results = new Results();

    if (!model.project) {
      return results;
    }

    ImGui.SetNextWindowPos(windowPos);
    ImGui.SetNextWindowSize(windowSize);
    ImGui.Begin(this.name, null, ImGui.WindowFlags.AlwaysAutoResize);

    const selection = model.session.selections[0];
    if (typeof selection === 'undefined') {
      return results;
    }

    const collection = jsonpatch.getValueByPointer(model.project, `/${selection.kind}`);
    const obj = collection[selection.id];
    if (!obj) {
      console.warn(`Unable to find selection: ${JSON.stringify(selection)}`);
      console.warn(Object.keys(collection));
      return results;
    }

    (this.properties ?? []).forEach((prop) => {
      const refMap = {};
      const value = jsonpatch.getValueByPointer(obj, `/${prop.key}`) ?? prop.default;
      if (prop.type === 'ref') {
        Object.entries(model.project[prop.args.kind] ?? []).forEach(([id, ref]) => {
          refMap[id] = ref.name;
        });
      }
      const newValue = Draw[prop.type](prop.label ?? '', value, prop.args, refMap);
      if (newValue !== null) {
        results.addUpdate({
          op: 'add',
          path: `/project/${selection.kind}/${selection.id}/${prop.key}`,
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
        path: `/project/${selection.kind}/${selection.id}`,
      });
    }

    ImGui.End();
    return results;
  }
}

export default ObjectView;
