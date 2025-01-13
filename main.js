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

    this.canvas.addEventListener('keyup', (event) => {
      this.events.push({
        type: 'KeyboardEvent',
        keysym: event.code,
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

  saveFile(data, filename, type) {
    const file = new Blob([data], { type });
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
const settings = {
  // base00 - Default Background
  // base01 - Lighter Background (Used for status bars, line number and folding marks)
  // base02 - Selection Background
  // base03 - Comments, Invisibles, Line Highlighting
  // base04 - Dark Foreground (Used for status bars)
  // base05 - Default Foreground, Caret, Delimiters, Operators
  // base06 - Light Foreground (Not often used)
  // base07 - Light Background (Not often used)

  // base08 - X - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
  // base0B - Y - Strings, Inherited Class, Markup Code, Diff Inserted
  // base0D - Z - Focus - Functions, Methods, Attribute IDs, Headings

  // base0E - Interactable - Keywords, Storage, Selector, Markup Italic, Diff Changed
  // base0A - Focus - Classes, Markup Bold, Search Text Background

  // base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url
  // base0C - Support, Regular Expressions, Escape Characters, Markup Quotes
  // base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>

  // Current theme is Monokai
  colors: {
    base00: '272822',
    base01: '383830',
    base02: '49483e',
    base03: '75715e',
    base04: 'a59f85',
    base05: 'f8f8f2',
    base06: 'f5f4f1',
    base07: 'f9f8f5',
    base08: 'f92672',
    base09: 'fd971f',
    base0A: 'f4bf75',
    base0B: 'a6e22e',
    base0C: 'a1efe4',
    base0D: '66d9ef',
    base0E: 'ae81ff',
    base0F: 'cc6633',
  },
};
const editor = new Editor({
  system: new WebSystem(canvas),
  gui: new Gui(canvas, settings),
  renderer: new Renderer(canvas, settings),
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
