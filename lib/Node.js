import BaseWrapper from './BaseWrapper';
import * as Draw from './DrawProperty';

class Node extends BaseWrapper {
  constructor(item, defaultName) {
    super(item, defaultName);

    this.scale = item.scale || [0.0, 0.0, 0.0];
    this.translation = item.translation || [0.0, 0.0, 0.0];
    this.rotation = item.rotation || [0.0, 0.0, 0.0, 1.0];
  }

  drawEditor() {
    Draw.Text('Name', this, 'name');
    Draw.Vec3('Position', this, 'translation', 0.1, null, null);
    Draw.Vec4('Rotation', this, 'rotation');
    Draw.Vec3('Scale', this, 'scale');
    BaseWrapper.prototype.drawEditor.call(this);
  }

  get scale() {
    return this.$private.scale;
  }

  set scale(value) {
    this.$private.scale = value;
    if (this.display) {
      [
        this.display.scale.x,
        this.display.scale.y,
        this.display.scale.z,
      ] = value;
    }
  }

  get translation() {
    return this.$private.translation;
  }

  set translation(value) {
    this.$private.translation = value;
    if (this.display) {
      [
        this.display.position.x,
        this.display.position.y,
        this.display.position.z,
      ] = value;
    }
  }

  get rotation() {
    return this.$private.rotation;
  }

  set rotation(value) {
    if (this.display) {
      [
        this.display.quaternion.x,
        this.display.quaternion.y,
        this.display.quaternion.z,
        this.display.quaternion.w,
      ] = value;
      this.display.quaternion.normalize();
      value = [
        this.display.quaternion.x,
        this.display.quaternion.y,
        this.display.quaternion.z,
        this.display.quaternion.w,
      ];
    }
    this.$private.rotation = value;
  }
}

export default Node;
