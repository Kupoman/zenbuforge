import Gui from 'zf-gui';
import Renderer from 'zf-renderer-threejs';

import Editor from './src/Editor';

class WebSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.events = [];

    this.canvas.addEventListener('click', (event) => {
      this.events.push({
        type: 'MouseButtonEvent',
        x: event.x,
        y: event.y,
      });
    });
  }

  openFiles() {
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

  saveFile(data, filename) {
    const file = new Blob([data], { type: 'model/gltf+json' });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file, filename);
    } else {
      const a = document.createElement('a');
      const url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  setProject(name) {
    document.title = `Zenbuforge - ${name}`;
  }
}

const canvas = document.getElementById('viewport');
const editor = new Editor({
  system: new WebSystem(canvas),
  gui: new Gui(canvas),
  renderer: new Renderer(canvas),
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
