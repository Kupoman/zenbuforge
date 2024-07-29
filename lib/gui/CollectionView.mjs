import * as jsonpatch from 'fast-json-patch';
import * as ImGui from './extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';

class CollectionView {
  constructor(definition, options) {
    const _options = options ?? {};
    this.name = definition.name;
    this.size = _options.size ?? 1;
    this.isVisible = true;
    this.actions = definition.actions ?? [];
    this.params = {};
  }

  update(model, windowPos, windowSize) {
    const results = new Results();

    const selection = model.session.selections[0];
    if (typeof selection === 'undefined') {
      return results;
    }

    ImGui.SetNextWindowPos(windowPos);
    ImGui.SetNextWindowSize(windowSize);
    ImGui.Begin(this.name, null, ImGui.WindowFlags.AlwaysAutoResize);

    this.actions.forEach((action) => {
      if (action.condition && !action.condition(model)) {
        return;
      }

      const requiresModal = action.userParams && action.userParams.length > 0;
      if (ImGui.Button(action.name)) {
        if (!requiresModal) {
          results.addCall({
            method: action.method,
            params: action.params,
          });
          return;
        }
        ImGui.OpenPopup(action.name);
        this.params[action.name] = {};
      }

      if (ImGui.BeginPopupModal(action.name, null, ImGui.WindowFlags.AlwaysAutoResize)) {
        (action.userParams ?? []).forEach((param) => {
          const value = this.params[action.name][param.key] ?? param.default;
          const newValue = Draw[param.type](param.label ?? '', value, param.args);
          if (newValue !== null) {
            this.params[action.name][param.key] = newValue;
          }
        });
        if (ImGui.Button('OK')) {
          ImGui.CloseCurrentPopup();
          results.addCall({
            method: action.method,
            params: {
              ...action.params,
              ...this.params[action.name],
            },
          });
          delete this.params[action.name];
        }
        ImGui.SetItemDefaultFocus();

        ImGui.SameLine();
        if (ImGui.Button('Cancel')) {
          ImGui.CloseCurrentPopup();
        }
        ImGui.EndPopup();
      }
    });

    ImGui.End();
    return results;
  }
}

export default CollectionView;
