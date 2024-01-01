import * as ImGui from './imgui.mjs';

import BaseWrapper from './BaseWrapper.mjs';
import * as Draw from './DrawProperty.mjs';

class Asset extends BaseWrapper {
  constructor(item, defaultName) {
    super(item, defaultName);

    this.generator = item.generator || '';
    this.copyright = item.copyright || '';
    this.version = item.version || '';
    this.minVersion = item.minVersion || '';
  }

  drawEditor() {
    ImGui.BeginDisabled();
    Draw.Text('Generator', this, 'generator');
    Draw.Text('Copyright', this, 'copyright');
    Draw.Text('glTF Version', this, 'version');
    ImGui.EndDisabled();
  }
}

export default Asset;
