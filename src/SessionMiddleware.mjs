import jsonpatch from 'fast-json-patch';

import { Context, Results } from 'zf-data';

class SessionMiddleware {
  constructor(storageApi) {
    this.storage = storageApi;
    this.context = new Context();
    this.context.enableProjectSession();
    this.context.enableClientSession();
    this.context.enableUserSession();
  }

  _initCurrentProjectSession() {
    const { projectId } = this.context.clientSession;
    if (projectId !== null) {
      this.context.projectSession = JSON.parse(this.storage.getItem(`projectSession.${projectId}`) ?? '{}');
    } else {
      this.context.projectSession = {};
    }

    this.context.projectSession.selections ??= [];
    this.context.projectSession.viewports ??= [{
      x: 0,
      y: 0,
      width: 1,
      height: 1,
    }];

    if (projectId !== null) {
      this.storage.setItem(`projectSession.${projectId}`, JSON.stringify(this.context.projectSession));
    }
  }

  init() {
    const results = new Results();

    this.context.userSession = JSON.parse(this.storage.getItem('userSession') ?? '{}');
    this.context.userSession.projects ??= {};
    this.storage.setItem('userSession', JSON.stringify(this.context.userSession));

    this.context.clientSession = JSON.parse(this.storage.getItem('clientSession') ?? '{}');
    this.context.clientSession.projectId ??= null;
    this.storage.setItem('clientSession', JSON.stringify(this.context.clientSession));

    this._initCurrentProjectSession();

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
    const prevProjectId = this.context.clientSession.projectId;

    let isProjectChanged = false;

    if (updates.userSession.length > 0) {
      jsonpatch.applyPatch(this.context.userSession, updates.userSession, true, true, true);
      this.storage.setItem('userSession', JSON.stringify(this.context.userSession));
    }

    if (updates.clientSession.length > 0) {
      jsonpatch.applyPatch(this.context.clientSession, updates.clientSession, true, true, true);

      if (this.context.clientSession.projectId !== prevProjectId) {
        this._initCurrentProjectSession();
        isProjectChanged = true;
      }

      this.storage.setItem('clientSession', JSON.stringify(this.context.clientSession));
    }

    if (!isProjectChanged || updates.projectSession.length > 0) {
      jsonpatch.applyPatch(this.context.projectSession, updates.projectSession, true, true, true);
      const { projectId } = this.context.clientSession;
      this.storage.setItem(`projectSession.${projectId}`, JSON.stringify(this.context.projectSession));
    }

    return new Results();
  }
}

export default SessionMiddleware;
