import PersistedData from './PersistedData.mjs';

class Session extends PersistedData {
  init() {
    return Promise.resolve()
      .then(() => super.init())
      .then(() => {
        this.jsonProxy.selections ??= [];
        this.jsonProxy.projectId ??= null;
      });
  }

  setProject(id) {
    this.jsonProxy.selections = [];
    this.jsonProxy.projectId = id;
  }
}

export default Session;
