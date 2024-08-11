import * as jsonpatch from 'fast-json-patch';
import * as ImGui from './extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';
import Results from './Results.mjs';

class View {
  constructor(definition, options) {
    const _options = options ?? {};
    this.name = definition.name;
    this.size = _options.size ?? 1;
    this.actions = definition.actions ?? [];
    this.params = {};
  }

  drawActions(model, obj, results) {
    this.actions.forEach((action) => {
      if (action.condition && !action.condition(model, obj)) {
        return;
      }

      const params = JSON.parse(JSON.stringify(action.params ?? {}));

      (action.objectParams ?? []).forEach((objParam) => {
        params[objParam.key] = jsonpatch.getValueByPointer(obj, objParam.pointer);
      });

      const requiresModal = action.userParams && action.userParams.length > 0;
      if (ImGui.Button(action.name)) {
        if (!requiresModal) {
          results.addCall({
            method: action.method,
            params,
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
              ...params,
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
  }

  beginDraw(windowPos, windowSize) {
    ImGui.SetNextWindowPos(windowPos);
    ImGui.SetNextWindowSize(windowSize);
    ImGui.Begin(this.name, null, ImGui.WindowFlags.AlwaysAutoResize);
  }

  endDraw() {
    ImGui.End();
  }
}

export default View;
