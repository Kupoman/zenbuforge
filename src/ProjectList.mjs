import PersistedData from './PersistedData.mjs';

class ProjectList extends PersistedData {
  init() {
    return Promise.resolve()
      .then(() => super.init())
      .then(() => {
        this.jsonProxy.projects ??= {};
        //this.jsonProxy.projects = {};
      });
  }
}

export default ProjectList;
