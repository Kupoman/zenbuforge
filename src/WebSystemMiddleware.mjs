import { Context, Results } from 'zf-data';

class WebSystemMiddleware {
  constructor(canvas) {
    this.canvas = canvas;
    this.events = [];

    this.context = new Context();
    this.context.enableProjectSession();
    this.context.enableClientSession();
    this.context.enableUserSession();
    this.context.enableScratchSession();

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

    if (!this.context.scratchSession.guiCaptureMouse) {
      while (this.events.length) {
        const event = this.events.shift();
        if (event.type === 'MouseButtonEvent') {
          const viewport = this.context.projectSession.viewports[0];
          this.results.addCall({
            method: 'renderer.pickSelection',
            params: {
              x: (event.x - viewport.x) / viewport.width,
              y: (event.y - viewport.y) / viewport.height,
            },
          });
        }

        if (event.type === 'KeyboardEvent') {
          if (event.keysym === 'KeyP') {
            this.results.addCall({ method: '*.debug' });
          }
        }
      }
    } else {
      this.events = [];
    }

    return this._getResults();
  }
}

export default WebSystemMiddleware;
