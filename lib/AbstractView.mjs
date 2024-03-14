import * as ImGui from '../extern/imgui.mjs';

import * as gltf from './GltfUtils.mjs';
import * as utils from './Utils.mjs';

function isChanged(a, b) {
  if (!utils.isDefined(a) && !utils.isDefined(b)) {
    return false;
  }
  if (Object.keys(a).length !== Object.keys(b)) {
    return true;
  }

  let _isChanged = false;
  Object.entries(a).forEach(([aKey, aValue]) => {
    const bValue = b[aKey];
    if (typeof aValue === 'object') {
      _isChanged = _isChanged || isChanged(aValue, bValue);
      return;
    }
    _isChanged = _isChanged || (a === b);
  });

  return _isChanged;
}

class AbstractView {
  constructor(name, key) {
    this.name = name;
    this.key = key;
    this.isVisible = true;
  }

  update(model, windowPos, windowSize) {
    const updates = [];

    if (!this.isVisible) {
      return [];
    }

    ImGui.SetNextWindowPos(windowPos);
    ImGui.SetNextWindowSize(windowSize);
    ImGui.Begin(this.name, null, ImGui.WindowFlags.AlwaysAutoResize);

    const updated = JSON.parse(JSON.stringify(model));
    if (utils.isDefined(model)) {
      const drawUpdates = this.draw(updated);
      updates.push(...drawUpdates);
    }

    ImGui.End();

    if (isChanged(model, updated)) {
      updates.push({
        action: 'update',
        key: this.key,
        id: gltf.getId(updated),
        data: updated,
      });
    }

    return updates;
  }

  draw(model) { }
}

export default AbstractView;
