export function isDefined(i) {
  return typeof i !== 'undefined' && i !== null;
}

export function isObjectChanged(a, b) {
  if (!isDefined(a) || !isDefined(b)) {
    return false;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return true;
  }

  let _isChanged = false;
  Object.entries(a).forEach(([aKey, aValue]) => {
    const bValue = b[aKey];
    if (typeof aValue === 'object') {
      _isChanged = _isChanged || isObjectChanged(aValue, bValue);
      return;
    }
    _isChanged = _isChanged || (aValue !== bValue);
  });

  return _isChanged;
}

export function isNodeEnv() {
  return typeof process !== 'undefined'
    && process.versions != null
    && process.versions.node != null;
}
