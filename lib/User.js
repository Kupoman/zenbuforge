import * as ImGui from './imgui';

import BaseWrapper from './BaseWrapper';
import * as Draw from './DrawProperty';

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
