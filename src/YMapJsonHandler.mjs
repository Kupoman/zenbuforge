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

const YArrayJsonHandler = {
  has(target, key) {
    if (!Number.isNaN(key)) {
      const number = parseInt(key, 10);
      return number >= 0 && number < target.length;
    }

    return false;
  },

  get(target, key) {
    if (key === 'toJSON') {
      return () => target.toJSON();
    }

    if (key === 'length') {
      return target.length;
    }

    if (key === 'push') {
      return (content) => target.push([content]);
    }

    if (key === 'includes') {
      return (search) => {
        let found = false;
        target.forEach((value) => {
          if (value === search) {
            found = true;
          }
        });
        return found;
      };
    }

    if (['map', 'forEach'].includes(key)) {
      return Array.prototype[key];
    }

    return ProxyBuilder.auto(target.get(key));
  },

  set(target, key, value) {
    target.doc.transact(() => {
      if (key < target.length) {
        target.delete(key, 1);
      }
      target.insert(key, [Wrap.item(value)]);
    });
    return true;
  },

  deleteProperty(target, key) {
    target.delete(key, 1);
    return true;
  },

  ownKeys(target) {
    return Array.from({ length: target.length }, (value, index) => index.toString());
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

const YMapJsonHandler = {
  has(target, key) {
    return target.has(key);
  },

  get(target, key) {
    if (key === 'toJSON') {
      return () => target.toJSON();
    }
    return ProxyBuilder.auto(target.get(key));
  },

  set(target, key, value) {
    target.set(key, Wrap.item(value));
    return true;
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

class ProxyBuilder {
  static array(target) {
    return new Proxy(target, YArrayJsonHandler);
  }

  static map(target) {
    return new Proxy(target, YMapJsonHandler);
  }

  static auto(target) {
    if (target instanceof Y.Array) {
      return ProxyBuilder.array(target);
    }

    if (target instanceof Y.Map) {
      return ProxyBuilder.map(target);
    }

    return target;
  }
}

export default YMapJsonHandler;
