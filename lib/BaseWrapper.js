import * as ImGui from './imgui';

class BaseWrapper {
  constructor(item, defaultName) {
    this.$private = {};
    this.$noSerialize = {
      display: null,
    };
    Object.assign(this, item);

    if (defaultName) {
      this.name = item.name || defaultName;
    }
  }

  drawEditor() {
    const str = JSON.stringify(this, null, 2);
    const buf = [str];
    const size = new ImGui.ImVec2(0.0, -1.0);
    ImGui.InputTextMultiline('JSON', buf, str.length, size);
  }

  toJSON() {
    const out = { ...this };
    delete out.$noSerialize;
    Object.assign(out, out.$private);
    delete out.$private;
    return out;
  }

  get display() {
    return this.$noSerialize.display;
  }

  set display(value) {
    this.$noSerialize.display = value;
  }

  get name() {
    return this.$private.name;
  }

  set name(value) {
    this.$private.name = value;
    if (this.display) {
      this.display.name = value;
    }
  }
}

export default BaseWrapper;
