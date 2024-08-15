export function isDefined(i) {
  return typeof i !== 'undefined' && i !== null;
}

export function isNodeEnv() {
  return typeof process !== 'undefined'
    && process.versions != null
    && process.versions.node != null;
}
