import * as ImGui from './imgui';

import BaseWrapper from './BaseWrapper';
import * as Draw from './DrawProperty';

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
