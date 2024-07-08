import * as Y from 'yjs';

class Wrap {
  static item(item) {
    if (Array.isArray(item)) {
      return this.array(item);
    }

    if (typeof item === 'object' && item !== null) {
      return this.object(item);
    }

    return item;
  }

  static object(item) {
    const map = new Y.Map();

    Object.entries(item).forEach(([key, value]) => {
      map.set(key, this.item(value));
    });

    return map;
  }

  static array(item) {
    const array = new Y.Array();

    item.forEach((i) => {
      array.push([this.item(i)]);
    });

    return array;
  }
}

const YMapJsonHandler = {
  getPrototypeOf(target) {
    if (target instanceof Y.Array) {
      return Array.prototype;
    }

    return Object.prototype;
  },

  has(target, key) {
    if (target instanceof Y.Array && !Number.isNaN(key)) {
      const number = parseInt(key, 10);
      return number >= 0 && number < target.length;
    }

    if (target instanceof Y.Map) {
      return target.has(key);
    }

    return false;
  },

  get(target, key) {
    if (key === 'toJSON') {
      return () => target.toJSON();
    }

    if (key === 'length' && target instanceof Y.Array) {
      return target.length;
    }

    if (target instanceof Y.Array && ['map', 'forEach'].includes(key)) {
      return Array.prototype[key];
    }

    let value = target.get(key);
    if (value instanceof Y.AbstractType) {
      value = new Proxy(value, YMapJsonHandler);
    }
    return value;
  },

  set(target, key, value) {
    if (target instanceof Y.Array) {
      target.doc.transact(() => {
        target.delete(key);
        target.insert(key, [Wrap.item(value)]);
      });
      return true;
    }
    return target.set(key, Wrap.item(value));
  },

  deleteProperty(target, key) {
    target.delete(key);
    return true;
  },

  ownKeys(target) {
    if (target instanceof Y.Array) {
      return Array.from({ length: target.length }, (value, index) => index.toString());
    }
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
