class Results {
  constructor() {
    this.updates = [];
    this.procedureCalls = [];
  }

  addUpdate(update) {
    this.updates.push(update);
  }

  addCall(call) {
    this.procedureCalls.push(call);
  }

  mergeResults(other) {
    const merged = new Results();
    merged.updates = this.updates.concat(other.updates);
    merged.procedureCalls = this.procedureCalls.concat(other.procedureCalls);
    return merged;
  }
}

export default Results;
