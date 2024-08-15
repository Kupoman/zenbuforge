import Gui from 'zf-gui';
import Renderer from 'zf-renderer-threejs';

import Editor from './src/Editor';

class WebFileLoader {
  selectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    let files = [];
    const promise = new Promise((resolve, reject) => {
      input.onchange = () => {
        files = [...input.files];
        resolve();
      };
      input.onerror = (error) => reject(error);
    });
    input.click();
    return promise
      .then(() => {
        const bufferPromises = files.map((f) => f.arrayBuffer());
        return Promise.all(bufferPromises);
      })
      .then((buffers) => files.map((f, i) => ({
        name: f.name,
        buffer: new Uint8Array(buffers[i]),
      })));
  }
}

const canvas = document.getElementById('viewport');
const editor = new Editor({
  fileLoader: new WebFileLoader(),
  gui: new Gui(canvas),
  renderer: new Renderer(canvas),
  windowHandler: {
    setProject(name) {
      document.title = `Zenbuforge - ${name}`;
    },
  },
});

window.onresize = () => editor.resize(window.innerWidth, window.innerHeight);
editor.resize(window.innerWidth, window.innerHeight);

function loop(time) {
  editor.update(time);
  requestAnimationFrame(loop);
}

Promise.resolve()
  .then(() => editor.init())
  .then(() => {
    loop();
  });
