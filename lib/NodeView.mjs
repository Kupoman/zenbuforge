import * as ImGui from '../extern/imgui.mjs';

import * as Draw from './DrawProperty.mjs';

import * as gltf from './GltfUtils.mjs';
import * as utils from './Utils.mjs';

function isVec3Changed(a, b) {
  return (
    a[0] !== b[0]
    || a[1] !== b[1]
    || a[2] !== b[2]
  );
}

class NodeView {
  constructor() {
    this.isActive = false;
    this.isVisible = true;
  }

  update(model, width, height) {
    const updates = [];
    this.isActive = false;

    if (!this.isVisible) {
      return [];
    }

    if (!utils.isDefined(model)) {
      return [];
    }

    const updated = JSON.parse(JSON.stringify(model));

    ImGui.SetNextWindowPos(new ImGui.ImVec2(width - width * 0.33, 0));
    ImGui.SetNextWindowSize(new ImGui.ImVec2(width * 0.33, height * 0.5));
    ImGui.Begin('Node', null, ImGui.WindowFlags.AlwaysAutoResize);

    if (ImGui.IsWindowFocused()) {
      this.isActive = true;
    }

    if (!utils.isDefined(updated.name)) {
      updated.name = '';
    }

    Draw.Text('Name', updated, 'name');
    Draw.Vec3('Position', updated, 'translation', 0.1, null, null);
    Draw.Vec4('Rotation', updated, 'rotation');
    Draw.Vec3('Scale', updated, 'scale');

    const str = JSON.stringify(updated, null, 2);
    const buf = [str];
    const size = new ImGui.ImVec2(0.0, -1.0);
    ImGui.InputTextMultiline('JSON', buf, str.length, size);

    ImGui.End();

    if (
      updated.name !== model.name
      || isVec3Changed(updated.translation, model.translation)
    ) {
      updates.push({
        action: 'update',
        key: 'nodes',
        id: gltf.getId(updated),
        data: updated,
      });
    }

    return updates;
  }
}

export default NodeView;
