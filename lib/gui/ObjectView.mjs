import * as jsonpatch from 'fast-json-patch';
import * as ImGui from './extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';
import View from './View.mjs';

class ObjectView extends View {
  constructor(definition, options) {
    super(definition, options);
    this.properties = definition.properties ?? {};
    this.isGatheringTabs = false;
    this.tabDraws = [];
  }

  drawProperty(obj, model, prop, results) {
    const selection = model.session.selections[0];
    if (prop.type === 'beginTabs') {
      this.isGatheringTabs = true;
      return;
    }

    if (prop.type === 'endTabs') {
      this.isGatheringTabs = false;
      ImGui.BeginTabBar(prop.label);
      const tabObjs = jsonpatch.getValueByPointer(obj, `/${prop.key}`);
      tabObjs.forEach((tabObj, i) => {
        const label = `${i}`;
        if (ImGui.BeginTabItem(label)) {
          ImGui.PushID(label);
          this.tabDraws.forEach((d) => d(tabObj));
          ImGui.PopID();
          ImGui.EndTabItem();
        }
      });
      ImGui.EndTabBar();
      this.tabDraws = [];
      return;
    }

    if (this.isGatheringTabs) {
      this.tabDraws.push(
        (tabObj) => this.drawProperty(tabObj, model, prop, results),
      );
      return;
    }

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
    if (['ref', 'textureRef', 'listRef'].includes(prop.type)) {
      const refItems = jsonpatch.getValueByPointer(model.project, prop.args.key);
      Object.entries(refItems ?? []).forEach(([id, ref]) => {
        refMap[id] = ref.name;
      });
    }

    if (!(prop.type in Draw)) {
      console.error(`Cannot find draw function for ${prop.type}`);
      return;
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
      this.drawProperty(obj, model, prop, results);
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
