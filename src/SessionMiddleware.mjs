import * as jsonpatch from 'fast-json-patch';
import { Results } from 'zf-data';

class SessionMiddleware {
  constructor() {
    this.projectSession = {};
    this.clientSession = {};
    this.userSession = {};

    this.keys = [
      'projectSession',
      'clientSession',
      'userSession',
    ];
  }

  init() {
    const results = new Results();
    this.keys.forEach((key) => {
      const value = localStorage.getItem(key) ?? '{}';
      this[key] = JSON.parse(value);
    });

    this.projectSession.selections ??= [];
    this.projectSession.viewports ??= [{
      x: 0,
      y: 0,
      width: 1,
      height: 1,
    }];

    this.clientSession.projectId ??= null;

    this.userSession.projectList ??= {};

    this.keys.forEach((key) => {
      results[key].push({
        op: 'replace',
        path: '',
        value: this[key],
      });
    });

    return results;
  }

  update(updates) {
    this.keys.forEach((key) => {
      jsonpatch.applyPatch(this[key], updates[key], true, true, true);
      localStorage.setItem(key, JSON.stringify(this[key]));
    });

    return new Results();
  }
}

export default SessionMiddleware;
