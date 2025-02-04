import { Results } from 'zf-data';

class Editor {
  constructor(middlewares) {
    this.middlewares = middlewares;
    this.prevTime = 0;
    this.updates = new Results();
  }

  async init() {
    await Promise.all(this.middlewares.map(async (middleware) => {
      this.updates.mergeResults(await middleware.init());
    }));
  }

  async update(time) {
    const dt = (time - this.prevTime) / 1000;
    this.prevTime = time;

    this.updates.addScratchSessionUpdate({
      op: 'add',
      path: '/dt',
      value: dt,
    });

    const results = new Results();

    this.middlewares.forEach((middleware) => {
      results.mergeResults(middleware.update(this.updates));
    });

    this.updates.clear();
    this.updates.mergeResults(results);
  }
}

export default Editor;
