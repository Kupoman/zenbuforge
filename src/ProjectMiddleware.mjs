import * as jsonpatch from 'fast-json-patch';
import { Context, Results } from 'zf-data';

import Project from './Project.mjs';

class ProjectMiddleware {
  constructor() {
    this.context = new Context();
    this.context.enableClientSession();
    this.context.enableUserSession();

    this.project = null;
    this.results = new Results();
  }

  init() {
    return this.results;
  }

  _loadProject() {
    if (this.project) {
      this.project.destroy();
    }

    const id = this.context.clientSession.projectId;
    const projectDetails = this.context.userSession.projects[id];
    this.project = new Project(projectDetails);

    this.results.addProjectSessionUpdate({
      op: 'replace',
      path: '/selections',
      value: [],
    });

    this.results.addProjectDataUpdate({
      op: 'replace',
      path: '',
      value: {},
    });

    Promise.resolve()
      .then(() => this.project.init())
      .then(() => {
        this.results.addProjectDataUpdate({
          op: 'replace',
          path: '',
          value: JSON.parse(JSON.stringify(this.project.jsonProxy)),
        });
      });
  }

  update(updates) {
    const currentId = this.context.clientSession.projectId;
    this.context.update(updates);

    if (this.project === null || currentId !== this.context.clientSession.projectId) {
      this._loadProject(this.results);
    } else if (this.project.isInitialized()) {
      jsonpatch.applyPatch(this.project.jsonProxy, updates.projectData, true, true, true);
    }

    const [scene] = Object.keys(this.project?.jsonProxy?.scenes ?? []);
    if (scene) {
      this.results.addProjectDataUpdate({
        op: 'add',
        path: '/scene',
        value: scene,
      });
    }

    const resultStr = JSON.stringify(this.results);
    this.results.clear();
    return JSON.parse(resultStr);
  }
}

export default ProjectMiddleware;
