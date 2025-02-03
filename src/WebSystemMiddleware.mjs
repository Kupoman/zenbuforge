import { Context, Results } from 'zf-data';

class WebSystemMiddleware {
  constructor(canvas) {
    this.canvas = canvas;
    this.events = [];

    this.context = new Context();
    this.context.enableClientSession();
    this.context.enableUserSession();

    this.currentName = '';

    this.results = new Results();
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;

    this.results.addScratchSessionUpdate({
      op: 'add',
      path: '/width',
      value: width,
    });

    this.results.addScratchSessionUpdate({
      op: 'add',
      path: '/height',
      value: height,
    });
  }

  init() {
    window.onresize = () => this.resize(window.innerWidth, window.innerHeight);
    this.resize(window.innerWidth, window.innerHeight);

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

    return new Results();
  }

  _getResults() {
    const resultStr = JSON.stringify(this.results);
    this.results.clear();
    return JSON.parse(resultStr);
  }

  update(updates) {
    this.context.update(updates);

    const id = this.context.clientSession.projectId;
    if (typeof id === 'undefined' || id === null) {
      return this._getResults();
    }

    const projectDetails = this.context.userSession.projects[id];
    if (this.currentName !== projectDetails.name) {
      this.currentName = projectDetails.name;
      document.title = `Zenbuforge - ${projectDetails.name}`;
    }

    return this._getResults();
  }

  /* eslint-disable-next-line class-methods-use-this */
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

  /* eslint-disable-next-line class-methods-use-this */
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
}

export default WebSystemMiddleware;
