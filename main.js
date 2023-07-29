import Zenbuforge from './lib/Zenbuforge';

const canvas = document.getElementById('viewport');
const zenbuforge = new Zenbuforge(canvas);
await zenbuforge.init();
zenbuforge.resize(window.innerWidth, window.innerHeight);
window.onresize = () => zenbuforge.resize(window.innerWidth, window.innerHeight);

const urlBase = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Sponza/glTF/';
fetch(`${urlBase}/Sponza.gltf`)
  .then((response) => response.json())
  .then((json) => zenbuforge.load(json, urlBase));

function loop() {
  zenbuforge.update();
  requestAnimationFrame(loop);
}
loop();
