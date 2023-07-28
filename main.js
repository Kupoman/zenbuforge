import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CameraControls from './lib/CameraControls';

const clock = new THREE.Clock();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 1;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
const url = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Sponza/glTF/Sponza.gltf';
loader.load(url, (gltf) => {
  scene.add(gltf.scene);
});

const light = new THREE.PointLight();
light.position.set(0, 1, 0);
light.intensity = 5;
scene.add(light);

const controls = new CameraControls(camera, renderer.domElement);
controls.rollSpeed = 2;

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  controls.update(dt);
  renderer.render(scene, camera);
}
animate();
