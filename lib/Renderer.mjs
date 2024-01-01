import * as THREE from 'three';
import CameraControls from './CameraControls';

class Renderer {
  constructor(canvas) {
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xcccccc);
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.controls = new CameraControls(this.camera, this.renderer.domElement);
    this.controls.rollSpeed = 2;
  }

  resize(width, height) {
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default Renderer;
