export class Results {
  constructor() {
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
  }

  clear() {
    this.procedureCalls = [];

    this.projectData = [];
    this.projectSession = [];
    this.clientSession = [];
    this.userSession = [];
    this.scratchSession = [];
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
    this.procedureCalls = this.procedureCalls.concat(other.procedureCalls);

    this.projectData = this.projectData.concat(other.projectData);
    this.projectSession = this.projectSession.concat(other.projectSession);
    this.clientSession = this.clientSession.concat(other.clientSession);
    this.userSession = this.userSession.concat(other.userSession);
    this.scratchSession = this.scratchSession.concat(other.scratchSession);
  }
}

export default Results;
