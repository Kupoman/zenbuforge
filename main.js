import Zenbuforge from './lib/Zenbuforge';

const canvas = document.getElementById('viewport');
const zenbuforge = new Zenbuforge(canvas);
window.onresize = () => zenbuforge.resize(window.innerWidth, window.innerHeight);
zenbuforge.resize(window.innerWidth, window.innerHeight);

function loop() {
  zenbuforge.update();
  requestAnimationFrame(loop);
}

const emptyGltf = JSON.stringify({
  asset: {
    version: '2.0',
  },
});

Promise.resolve()
  .then(() => zenbuforge.init())
  .then(() => {
    const urlBase = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Embedded/';
    return fetch(`${urlBase}/Box.gltf`)
      .then((response) => response.json())
      .then((json) => zenbuforge.load(json, urlBase));
  })
  //.then(() => zenbuforge.load(emptyGltf, ''))
  .then(() => {
    loop();
  });
