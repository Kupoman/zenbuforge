import * as ImGui from './extern/imgui.mjs';

import * as gltf from '../GltfUtils.mjs';
import * as utils from '../Utils.mjs';

class AbstractView {
  constructor(name, key, options) {
    const _options = options ?? {};
    this.name = name;
    this.key = key;
    this.size = _options.size ?? 1;
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

    if (utils.isObjectChanged(model, updated)) {
      updates.push({
        action: 'update',
        key: this.key,
        id: gltf.getId(updated),
        data: updated,
      });
    }

    return updates;
  }

  // eslint-disable-next-line no-unused-vars
  draw(model) { }
}

export default AbstractView;
