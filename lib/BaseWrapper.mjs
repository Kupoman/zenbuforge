import * as ImGui from './imgui.mjs';

class BaseWrapper {
  constructor(item, defaultName, ymap) {
    this.$private = {};
    this.$noSerialize = {
      display: null,
      ymap,
      enableSync: true,
    };
    Object.assign(this, item);

    if (defaultName) {
      this.name = item.name || defaultName;
    }

    if (typeof this.$noSerialize.ymap !== 'undefined') {
      this.$noSerialize.ymap.forEach((value, key) => this.setNoSync(key, value));
      this.$noSerialize.ymap.observe((event) => {
        event.changes.keys.forEach(
          (_, key) => this.setNoSync(key, this.$noSerialize.ymap.get(key))
        );
      });
    }
  }

  setNoSync(key, value) {
    this.$noSerialize.enableSync = false;
    this[key] = value;
    this.$noSerialize.enableSync = true;
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
