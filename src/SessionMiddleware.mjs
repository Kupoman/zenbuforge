import * as jsonpatch from 'fast-json-patch';
import { Context, Results } from 'zf-data';

class SessionMiddleware {
  constructor() {
    this.context = new Context();
    this.context.enableProjectSession();
    this.context.enableClientSession();
    this.context.enableUserSession();
  }

  init() {
    const results = new Results();
    this.context.enabledState.forEach((key) => {
      const value = localStorage.getItem(key) ?? '{}';
      this.context[key] = JSON.parse(value);
    });

    this.context.projectSession.selections ??= [];
    this.context.projectSession.viewports ??= [{
      x: 0,
      y: 0,
      width: 1,
      height: 1,
    }];

    this.context.clientSession.projectId ??= null;

    this.context.userSession.projects ??= {};

    this.context.enabledState.forEach((key) => {
      results[key].push({
        op: 'replace',
        path: '',
        value: JSON.parse(JSON.stringify(this.context[key])),
      });
    });

    return results;
  }

  update(updates) {
    this.context.enabledState.forEach((key) => {
      jsonpatch.applyPatch(this.context[key], updates[key], true, true, true);
      localStorage.setItem(key, JSON.stringify(this.context[key]));
    });

    return new Results();
  }
}

export default SessionMiddleware;
