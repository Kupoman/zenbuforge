class Results {
  constructor() {
    this.updates = [];
    this.procedureCalls = [];
    this.viewport = {
      width: 1,
      height: 1,
    };
  }

  addUpdate(update) {
    this.updates.push(update);
  }

  addCall(call) {
    this.procedureCalls.push(call);
  }

  setViewport(width, height) {
    this.viewport.width = width;
    this.viewport.height = height;
  }

  mergeResults(other) {
    const merged = new Results();
    merged.updates = this.updates.concat(other.updates);
    merged.procedureCalls = this.procedureCalls.concat(other.procedureCalls);
    return merged;
  }
}

export default Results;
