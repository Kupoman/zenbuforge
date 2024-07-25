import PersistedData from './PersistedData.mjs';

class ProjectList extends PersistedData {
  init() {
    return Promise.resolve()
      .then(() => super.init())
      .then(() => {
        this.jsonProxy.items ??= {};
        //this.jsonProxy.items = {};
      });
  }
}

export default ProjectList;
