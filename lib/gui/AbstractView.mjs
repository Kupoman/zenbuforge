import Results from './Results.mjs';

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
    let results = new Results();

    if (!this.isVisible) {
      return [];
    }

    ImGui.SetNextWindowPos(windowPos);
    ImGui.SetNextWindowSize(windowSize);
    ImGui.Begin(this.name, null, ImGui.WindowFlags.AlwaysAutoResize);

    if (utils.isDefined(model)) {
      results = results.mergeResults(this.draw(model));
    }

    ImGui.End();

    return results;
  }

  // eslint-disable-next-line no-unused-vars
  draw(model) { }
}

export default AbstractView;
