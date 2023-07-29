import Zenbuforge from './lib/Zenbuforge';

const canvas = document.getElementById('viewport');
const zenbuforge = new Zenbuforge(canvas);
window.onresize = () => zenbuforge.resize(window.innerWidth, window.innerHeight);
zenbuforge.resize(window.innerWidth, window.innerHeight);

function loop() {
  zenbuforge.update();
  requestAnimationFrame(loop);
}

Promise.resolve()
  .then(() => zenbuforge.init())
  .then(() => {
    const urlBase = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Sponza/glTF/';
    return fetch(`${urlBase}/Sponza.gltf`)
      .then((response) => response.json())
      .then((json) => zenbuforge.load(json, urlBase));
  })
  .then(() => {
    loop();
  });
