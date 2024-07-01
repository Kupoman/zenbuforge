import assert from 'assert';

import Project from '../lib/Project.mjs';

function makeProject() {
  const persistence = {
    init: () => Promise.resolve(),
  };
  const project = new Project({
    persistence,
  });

  return Promise.resolve()
    .then(() => project.init())
    .then(() => project);
}

function testListProperty(key, done) {
  return makeProject()
    .then((proj) => {
      proj[key].observeDeep(() => done());
      proj[key].push(['test']);
    });
}

function testCollectionProperty(key, done) {
  return makeProject()
    .then((proj) => {
      const data = { name: 'test' };
      proj.addResource(key, data);

      proj[key].observeDeep(() => {
        done();
      });
      proj[key].forEach((value) => {
        value.set('name', 'new name');
      });
    });
}

function testMapProperty(key, done) {
  return makeProject()
    .then((proj) => {
      proj[key].observeDeep(() => {
        done();
      });
      proj[key].set('key', 'value');
    });
}

function testValueProperty(key, done) {
  return makeProject()
    .then((proj) => {
      proj.ymap.observeDeep(() => {
        done();
      });
      proj.ymap.set(key, 'value');
    });
}

function makeNodeGltf(name) {
  return {
    nodes: [{
      name,
      extensions: {
        ZF_id: {
          id: name,
        },
      },
    }],
  };
}

describe('Project', function () {
  describe('.toJSON()', function () {
    it('should return JSON object', function () {
      return makeProject()
        .then((proj) => {
          const json = proj.toJSON();
          assert.equal(json.asset.version, '2.0');
        });
    });
  });

  describe('.observe()', function () {
    it('should generate add actions', function () {
      return makeProject()
        .then((proj) => {
          const gltf = makeNodeGltf('test');
          proj.observe((event) => {
            assert.equal(event.key, 'nodes');
            assert.equal(event.id, 'test');
            assert.equal(event.action, 'add');
            assert.deepEqual(event.data, gltf.nodes[0]);
          });
          proj.mergeJSON(gltf);
        });
    });

    it('should generate update actions', function () {
      return makeProject()
        .then((proj) => {
          const gltf = makeNodeGltf('test');
          proj.mergeJSON(gltf);
          proj.observe((event) => {
            assert.equal(event.key, 'nodes');
            assert.equal(event.id, 'test');
            const expected = JSON.parse(JSON.stringify(gltf.nodes[0]));
            expected.name = 'new name';
            assert.equal(event.action, 'update');
            assert.deepEqual(event.data, expected);
          });
          proj.nodes.get('test').set('name', 'new name');
        });
    });

    it('should generate delete actions', function () {
      return makeProject()
        .then((proj) => {
          const node = makeNodeGltf('test');
          proj.mergeJSON(node);
          proj.nodes.get('test').set('name', 'new name');
          proj.observe((event) => {
            assert.equal(event.key, 'nodes');
            assert.equal(event.id, 'test');
            assert.equal(event.action, 'delete');
            assert.equal(event.gltf, null);
          });
          proj.nodes.delete('test');
        });
    });
  });

  describe('.mergeJSON()', function () {
    it('should clean up event listeners', function () {
      let listenerCount = 0;
      return makeProject()
        .then((proj) => {
          listenerCount = Object.keys(proj._mergeCallbacks).length;
          return proj;
        })
        .then((proj) => proj.mergeJSON({}))
        .then((proj) => {
          const currentCount = Object.keys(proj._mergeCallbacks).length;
          assert.equal(currentCount, listenerCount);
        });
    });

    it('should append new items', function () {
      return makeProject()
        .then((proj) => proj.mergeJSON(makeNodeGltf('test')))
        .then((proj) => proj.mergeJSON(makeNodeGltf('test2')))
        .then((proj) => {
          assert.equal(proj.nodes.size, 2);
        });
    });

    it('should replace existing items', function () {
      return makeProject()
        .then((proj) => proj.mergeJSON(makeNodeGltf('test')))
        .then((proj) => proj.mergeJSON(makeNodeGltf('test')))
        .then((proj) => {
          assert.equal(proj.nodes.size, 1);
        });
    });
  });

  it('should sync extensionsUsed data', function (done) {
    testListProperty('extensionsUsed', done);
  });

  it('should sync extensionsRequired data', function (done) {
    testListProperty('extensionsRequired', done);
  });

  it('should sync accessors data', function (done) {
    testCollectionProperty('accessors', done);
  });

  it('should sync asset data', function (done) {
    testMapProperty('asset', done);
  });

  it('should sync animations data', function (done) {
    testCollectionProperty('animations', done);
  });

  it('should sync buffers data', function (done) {
    testCollectionProperty('buffers', done);
  });

  it('should sync bufferViews data', function (done) {
    testCollectionProperty('bufferViews', done);
  });

  it('should sync cameras data', function (done) {
    testCollectionProperty('cameras', done);
  });

  it('should sync images data', function (done) {
    testCollectionProperty('images', done);
  });

  it('should sync materials data', function (done) {
    testCollectionProperty('materials', done);
  });

  it('should sync meshes data', function (done) {
    testCollectionProperty('meshes', done);
  });

  it('should sync nodes data', function (done) {
    testCollectionProperty('nodes', done);
  });

  it('should sync samplers data', function (done) {
    testCollectionProperty('samplers', done);
  });

  it('should sync scene data', function (done) {
    testValueProperty('scene', done);
  });

  it('should sync scenes data', function (done) {
    testCollectionProperty('scenes', done);
  });

  it('should sync skins data', function (done) {
    testCollectionProperty('skins', done);
  });

  it('should sync textures data', function (done) {
    testCollectionProperty('textures', done);
  });

  it('should sync extensions data', function (done) {
    testMapProperty('extensions', done);
  });

  it('should sync extras data', function (done) {
    testMapProperty('extras', done);
  });
});
