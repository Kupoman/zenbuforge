import assert from 'assert';

import Project from '../lib/Project.mjs';

function testListProperty(key, done) {
  const proj = new Project();
  proj[key].observeDeep(() => done());
  proj[key].push(['test']);
}

function testCollectionProperty(key, done) {
  const proj = new Project();
  const data = { name: 'test' };
  proj.addResource(key, data);

  proj[key].observeDeep(() => {
    done();
  });
  proj[key].forEach((value) => {
    value.set('name', 'new name');
  });
}

function testMapProperty(key, done) {
  const proj = new Project();
  proj[key].observeDeep(() => {
    done();
  });
  proj[key].set('key', 'value');
}

function testValueProperty(key, done) {
  const proj = new Project();
  proj.ymap.observeDeep(() => {
    done();
  });
  proj.ymap.set(key, 'value');
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
      const proj = new Project();
      const json = proj.toJSON();
      assert.equal(json.asset.version, '2.0');
    });
  });

  describe('.observe()', function () {
    it('should generate add actions', function () {
      const proj = new Project();
      const gltf = makeNodeGltf('test');
      proj.observe((event) => {
        assert.equal(event.key, 'nodes');
        assert.equal(event.id, 'test');
        assert.equal(event.action, 'add');
        assert.deepEqual(event.data, gltf.nodes[0]);
      });
      proj.mergeJSON(gltf);
    });

    it('should generate update actions', function () {
      const proj = new Project();
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

    it('should generate delete actions', function () {
      const proj = new Project();
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

  describe('.mergeJSON()', function () {
    it('should append new items', function () {
      const proj = new Project();
      let count = 0;
      proj.observe((event) => {
        count += 1;
        assert.equal(proj[event.key].size, count);
      });
      proj.mergeJSON([makeNodeGltf('test')]);
      proj.mergeJSON([makeNodeGltf('test2')]);
    });

    it('should replace existing items', function () {
      const proj = new Project();
      proj.observe((event) => {
        assert.equal(proj[event.key].size, 1);
      });
      proj.mergeJSON([makeNodeGltf('test')]);
      proj.mergeJSON([makeNodeGltf('test')]);
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
