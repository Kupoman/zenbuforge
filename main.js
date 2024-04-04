import Gui from 'zf-gui';
import Renderer from 'zf-renderer-threejs';

import Zenbuforge from './lib/Zenbuforge';

class WebFileLoader {
  selectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    const promise = new Promise((resolve, reject) => {
      input.onchange = () => {
        resolve(input.files);
      };
      input.onerror = (error) => reject(error);
    });
    input.click();
    return promise
      .then((files) => files[0].arrayBuffer());
  }
}

const canvas = document.getElementById('viewport');
const zenbuforge = new Zenbuforge({
  fileLoader: new WebFileLoader(),
  gui: new Gui(canvas),
  renderer: new Renderer(canvas),
});

window.onresize = () => zenbuforge.resize(window.innerWidth, window.innerHeight);
zenbuforge.resize(window.innerWidth, window.innerHeight);

function loop() {
  zenbuforge.update();
  requestAnimationFrame(loop);
}

Promise.resolve()
  .then(() => zenbuforge.init())
  .then(() => {
    loop();
  });
