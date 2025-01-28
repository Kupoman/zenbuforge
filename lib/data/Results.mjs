export class Results {
  constructor() {
    this.updates = [];
    this.procedureCalls = [];
    this.viewport = {
      x: 0,
      y: 0,
      width: 1,
      height: 1,
    };

    this.projectData = [];
    this.projectSession = [];
    this.clientSession = [];
    this.userSession = [];
  }

  clear() {
    this.procedureCalls = [];

    this.projectData = [];
    this.projectSession = [];
    this.clientSession = [];
    this.userSession = [];
  }

  isEmpty() {
    return (
      this.procedureCalls.length === 0
      && this.projectData.length === 0
      && this.projectSession.length === 0
      && this.clientSession.length === 0
      && this.userSession.length === 0
      && this.updates.length === 0
    );
  }

  addUpdate(update) {
    this.updates.push(update);

    const scope = update.path.split('/')[1];

    const updateCopy = JSON.parse(JSON.stringify(update));

    if (scope === 'project') {
      updateCopy.path = updateCopy.path.replace('/project', '');
      this.projectData.push(updateCopy);
    } else if (scope === 'session') {
      updateCopy.path = updateCopy.path.replace('/session', '');
      this.projectSession.push(updateCopy);
    } else if (scope === 'projectList') {
      this.userSession.push(updateCopy);
    }
  }

  addProjectDataUpdate(update) {
    this.projectData.push(update);
  }

  addProjectSessionUpdate(update) {
    this.projectSession.push(update);
  }

  addClientSessionUpdate(update) {
    this.clientSession.push(update);
  }

  addUserSessionUpdate(update) {
    this.userSession.push(update);
  }

  addCall(call) {
    this.procedureCalls.push(call);
  }

  setViewport(x, y, width, height) {
    this.viewport.x = x;
    this.viewport.y = y;
    this.viewport.width = width;
    this.viewport.height = height;

    this.projectSession.push({
      op: 'replace',
      path: '/viewports/0',
      value: JSON.parse(JSON.stringify(this.viewport)),
    });
  }

  mergeResults(other) {
    const merged = new Results();
    merged.updates = this.updates.concat(other.updates);
    merged.procedureCalls = this.procedureCalls.concat(other.procedureCalls);

    merged.projectData = this.projectData.concat(other.projectData);
    merged.projectSession = this.projectSession.concat(other.projectSession);
    merged.clientSession = this.clientSession.concat(other.clientSession);
    merged.userSession = this.userSession.concat(other.userSession);

    return merged;
  }
}

export default Results;
