import * as jsonpatch from 'fast-json-patch';
import * as ImGui from './extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';

const CONDITIONS = {
  isActiveProject: (model, obj) => obj.id === model.session.projectId,
};

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
      let skip = false;
      (action.conditions ?? []).forEach((condition) => {
        skip |= !CONDITIONS[condition](model, obj);
      });
      if (skip) {
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
    const windowFlags = (
      ImGui.WindowFlags.None
      | ImGui.WindowFlags.AlwaysAutoResize
      | ImGui.WindowFlags.NoCollapse
    );
    ImGui.Begin(this.name, null, windowFlags);
  }

  endDraw() {
    ImGui.End();
  }
}

export default View;
