import {
  EventDispatcher,
  MathUtils,
  Spherical,
  Vector3,
} from 'three';

class CameraControls extends EventDispatcher {
  constructor(object, domElement) {
    super();

    this.object = object;
    this.domElement = domElement;

    // API

    // Set to false to disable this control
    this.enabled = true;

    this.movementSpeed = 1.0;
    this.rollSpeed = 0.005;

    this.autoForward = false;

    // internals
    this.lastPosition = new Vector3();
    this.mousePosition = new Spherical(1, Math.PI / 2, 0);

    this.isRotating = false;

    this.moveState = {
      up: 0,
      down: 0,
      left: 0,
      right: 0,
      forward: 0,
      back: 0,
      pitchUp: 0,
      pitchDown: 0,
      yawLeft: 0,
      yawRight: 0,
    };
    this.moveVector = new Vector3(0, 0, 0);
    this.rotationVector = new Vector3(0, 0, 0);

    this.contextmenu = this.contextMenu.bind(this);
    this.pointermove = this.pointermove.bind(this);
    this.pointerdown = this.pointerdown.bind(this);
    this.pointerup = this.pointerup.bind(this);
    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);

    this.domElement.addEventListener('contextmenu', this.contextmenu);
    this.domElement.addEventListener('pointerdown', this.pointerdown);
    this.domElement.addEventListener('pointermove', this.pointermove);
    this.domElement.addEventListener('pointerup', this.pointerup);

    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.keyup);

    this.updateMovementVector();
    this.updateRotationVector();

    this.update(1.0);
  }

  dispose() {
    this.domElement.removeEventListener('contextmenu', this.contextmenu);
    this.domElement.removeEventListener('pointerdown', this.pointerdown);
    this.domElement.removeEventListener('pointermove', this.pointermove);
    this.domElement.removeEventListener('pointerup', this.pointerup);

    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('keyup', this.keyup);
  }

  update(delta) {
    if (this.enabled === false) return;

    const moveMult = delta * this.movementSpeed;
    const rotMult = delta * this.rollSpeed;

    this.object.translateX(this.moveVector.x * moveMult);
    this.object.translateY(this.moveVector.y * moveMult);
    this.object.translateZ(this.moveVector.z * moveMult);

    this.mousePosition.theta += this.rotationVector.y * rotMult;
    this.mousePosition.phi -= this.rotationVector.x * rotMult;
    this.mousePosition.phi = MathUtils.clamp(
      this.mousePosition.phi,
      MathUtils.degToRad(5),
      MathUtils.degToRad(175),
    );
    const target = new Vector3();
    target
      .setFromSpherical(this.mousePosition)
      .add(this.object.position);
    this.object.lookAt(target);
  }

  updateMovementVector() {
    const forward = (
      (this.moveState.forward || (this.autoForward && !this.moveState.back)) ? 1 : 0
    );

    this.moveVector.x = (-this.moveState.left + this.moveState.right);
    this.moveVector.y = (-this.moveState.down + this.moveState.up);
    this.moveVector.z = (-forward + this.moveState.back);
  }

  updateRotationVector() {
    this.rotationVector.x = (-this.moveState.pitchDown + this.moveState.pitchUp);
    this.rotationVector.y = (-this.moveState.yawRight + this.moveState.yawLeft);
  }

  keydown(event) {
    if (event.altKey || this.enabled === false) {
      return;
    }

    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight': this.movementSpeedMultiplier = 0.1; break;

      case 'KeyW': this.moveState.forward = 1; break;
      case 'KeyS': this.moveState.back = 1; break;

      case 'KeyA': this.moveState.left = 1; break;
      case 'KeyD': this.moveState.right = 1; break;

      case 'KeyQ': this.moveState.down = 1; break;
      case 'KeyE': this.moveState.up = 1; break;

      case 'ArrowUp': this.moveState.pitchUp = 1; break;
      case 'ArrowDown': this.moveState.pitchDown = 1; break;

      case 'ArrowLeft': this.moveState.yawLeft = 1; break;
      case 'ArrowRight': this.moveState.yawRight = 1; break;

      default: break;
    }

    this.updateMovementVector();
    this.updateRotationVector();
  }

  keyup(event) {
    if (this.enabled === false) return;

    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight': this.movementSpeedMultiplier = 1; break;

      case 'KeyW': this.moveState.forward = 0; break;
      case 'KeyS': this.moveState.back = 0; break;

      case 'KeyA': this.moveState.left = 0; break;
      case 'KeyD': this.moveState.right = 0; break;

      case 'KeyQ': this.moveState.down = 0; break;
      case 'KeyE': this.moveState.up = 0; break;

      case 'ArrowUp': this.moveState.pitchUp = 0; break;
      case 'ArrowDown': this.moveState.pitchDown = 0; break;

      case 'ArrowLeft': this.moveState.yawLeft = 0; break;
      case 'ArrowRight': this.moveState.yawRight = 0; break;

      default: break;
    }

    this.updateMovementVector();
    this.updateRotationVector();
  }

  pointerdown(event) {
    if (this.enabled === false) return;
    if (event.button === 0) {
      this.isRotating = true;
    }
  }

  pointermove(event) {
    if (this.enabled === false) return;

    if (this.isRotating) {
      const container = this.getContainerDimensions();
      const halfWidth = container.size[0] / 2;
      const halfHeight = container.size[1] / 2;

      this.moveState.yawLeft = -((event.pageX - container.offset[0]) - halfWidth) / halfWidth;
      this.moveState.pitchDown = ((event.pageY - container.offset[1]) - halfHeight) / halfHeight;

      this.updateRotationVector();
    }
  }

  pointerup(event) {
    if (this.enabled === false) return;

    if (event.button === 0) {
      this.isRotating = false;
    }

    this.moveState.yawLeft = 0;
    this.moveState.pitchDown = 0;

    this.updateRotationVector();
  }

  contextMenu(event) {
    if (this.enabled === false) return;

    event.preventDefault();
  }

  getContainerDimensions() {
    if (this.domElement !== document) {
      return {
        size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
        offset: [this.domElement.offsetLeft, this.domElement.offsetTop],
      };
    }

    return {
      size: [window.innerWidth, window.innerHeight],
      offset: [0, 0],
    };
  }
}

export default CameraControls;
