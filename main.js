import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CameraControls from './lib/CameraControls';

import DataState from './lib/DataState';
import Gui from './lib/Gui';

const clock = new THREE.Clock();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 1;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

const canvas = document.getElementById('viewport');

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
const urlBase = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Sponza/glTF/';
const dataState = new DataState();
fetch(`${urlBase}/Sponza.gltf`)
  .then((response) => response.json())
  .then((result) => {
    dataState.init(result);
    return result;
  })
  .then((json) => loader.parse(
    json,
    urlBase,
    (gltf) => {
      scene.add(gltf.scene);
    },
    (error) => {
      alert(`Failed to parse file: ${error.message}`);
    },
  ))
  .catch((error) => {
    alert(error.message);
  });

const light = new THREE.PointLight();
light.position.set(0, 1, 0);
light.intensity = 5;
scene.add(light);

const controls = new CameraControls(camera, renderer.domElement);
controls.rollSpeed = 2;

const gui = new Gui(canvas, dataState);
await gui.init();

function animate() {
  requestAnimationFrame(animate);

  gui.update(clock.elapsedTime);
  if (!gui.isActive()) {
    const dt = clock.getDelta();
    controls.update(dt);
  }

  renderer.render(scene, camera);
  gui.render();
}
animate();
