import assert from 'assert';

import * as Y from 'yjs';

import YMapJsonHandler from '../lib/YMapJsonHandler.mjs';

describe('YMapJsonHandler', function () {
  it('should deep get from map', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    const child = new Y.Map();
    rootMap.set('child', child);
    child.set('key', 'value');
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    assert.equal(proxy.child.key, 'value');
  });

  it('should deep set to map', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    proxy.child = {
      child: {
        key: 'value',
      },
    };
    assert.equal(rootMap.get('child').get('child').get('key'), 'value');
  });

  it('should get arrays', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    const array = new Y.Array();
    array.push(['value']);
    rootMap.set('array', array);
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    assert.equal(proxy.array[0], 'value');
  });

  it('should support array length property', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    const array = new Y.Array();
    array.push(['value']);
    rootMap.set('array', array);
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    assert.equal(proxy.array.length, 1);
  });

  it('should set arrays', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    proxy.array = [{ key: 'value' }];
    assert.equal(rootMap.get('array').get(0).get('key'), 'value');
    proxy.array[0] = { key: 'new' };
    assert.equal(rootMap.get('array').get(0).get('key'), 'new');
  });

  it('should delete properties', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    rootMap.set('key', 'value');
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    delete proxy.key;
    assert.equal(rootMap.get('key'), undefined);
  });

  it('should iterate keys', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    rootMap.set('key', 'value');
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    assert.deepEqual(Object.keys(proxy), ['key']);
  });

  it('should iterate arrays', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    proxy.array = [{ key: 'value' }];

    assert.deepEqual(proxy.array.map((i) => i.key), ['value']);
  });

  it('should stringify', function () {
    const doc = new Y.Doc();
    const rootMap = doc.getMap('root');
    const proxy = new Proxy(rootMap, YMapJsonHandler);
    proxy.array = [
      { key: 'one' },
      { key: 'two' },
    ];
    assert.equal(JSON.stringify(proxy), '{"array":[{"key":"one"},{"key":"two"}]}');
  });
});
