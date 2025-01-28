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

    // Persisted, changed on project load, synced between users
    this.projectData = [];

    // Persisted, changed on project load
    this.projectSession = [];

    // Persisted, remains on project load
    this.clientSession = [];

    // Persisted, remains on project load, could be shared between devices
    this.userSession = [];

    // Not persisted, remains on project load
    this.scratchSession = [];

    this.projectList = [];
  }

  clear() {
    this.procedureCalls = [];

    this.projectData = [];
    this.projectSession = [];
    this.clientSession = [];
    this.userSession = [];
    this.scratchSession = [];
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
      this.projectList.push(updateCopy);
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

  addScratchSessionUpdate(update) {
    this.scratchSession.push(update);
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
    merged.scratchSession = this.scratchSession.concat(other.userSession);

    merged.projectList = this.projectList.concat(other.projectList);

    return merged;
  }
}

export default Results;
