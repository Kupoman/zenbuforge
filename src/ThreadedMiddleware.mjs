import Worker from 'web-worker';

import { Results } from 'zf-data';

class ThreadedMiddleware {
  constructor(url) {
    this.url = new URL(url, import.meta.url);
    this.worker = null;
    this.updates = new Results();
  }

  init() {
    this.worker = new Worker(this.url, { type: 'module' });

    this.worker.onmessage = (event) => {
      this.updates.mergeResults(JSON.parse(event.data));
    };

    this.worker.onerror = (event) => {
      console.warn(event);
    };

    this.worker.onmessageerror = (event) => {
      console.warn(event);
    };

    return new Results();
  }

  update(updates) {
    this.worker.postMessage(JSON.stringify(updates));

    const results = new Results();
    results.mergeResults(this.updates);
    this.updates.clear();

    return results;
  }
}

export default ThreadedMiddleware;
