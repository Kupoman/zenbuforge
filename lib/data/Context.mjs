import * as jsonpatch from 'fast-json-patch';

export class Context {
  constructor() {
    this.enabledState = new Set();

    [
      'projectData',
      'projectSession',
      'clientSession',
      'userSession',
      'scratchSession',
    ].forEach((key) => {
      const fname = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

      this[key] = {};
      this[`enable${fname}`] = () => {
        this.enabledState.add(key);
      };
      this[`disable${fname}`] = () => {
        this.enabledState.delete(key);
      };
    });
  }

  update(results) {
    this.enabledState.forEach((key) => {
      this[key] = jsonpatch.applyPatch(
        this[key],
        results[key],
        true,
        false,
        true,
      ).newDocument;
    });
  }
}

export default Context;
