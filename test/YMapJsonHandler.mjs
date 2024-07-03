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
});
