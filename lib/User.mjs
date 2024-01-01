import * as ImGui from './imgui.mjs';

import BaseWrapper from './BaseWrapper.mjs';
import * as Draw from './DrawProperty.mjs';

class User extends BaseWrapper {
  drawEditor() {
    if (!this.isLocal) {
      ImGui.BeginDisabled();
    }
    Draw.Text('Username', this, 'username');
    if (!this.isLocal) {
      ImGui.EndDisabled();
    }
  }

  get username() {
    return this.$private.username;
  }

  set username(value) {
    this.$private.username = value;
  }
}

export default User;
