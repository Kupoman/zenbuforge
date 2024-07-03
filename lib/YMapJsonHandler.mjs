import * as Y from 'yjs';

function wrapObject(object) {
  const map = new Y.Map();

  Object.entries(object).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      map.set(key, wrapObject(value));
    } else {
      map.set(key, value);
    }
  });

  return map;
}

const YMapJsonHandler = {
  get(target, key) {
    let value = target.get(key);
    if (value instanceof Y.AbstractType) {
      value = new Proxy(value, YMapJsonHandler);
    }
    return value;
  },

  set(target, key, value) {
    let newValue = value;
    if (typeof value === 'object' && value !== null) {
      newValue = wrapObject(value);
    }
    return target.set(key, newValue);
  },

  deleteProperty(target, key) {
    target.delete(key);
    return true;
  },

  ownKeys(target) {
    return [...target.keys()];
  },

  getOwnPropertyDescriptor(target, key) {
    const value = target.get(key);
    return value ? {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    } : undefined;
  },
};

export default YMapJsonHandler;
