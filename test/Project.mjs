import assert from 'assert';

import Project from '../lib/Project.mjs';

function testListProperty(key, done) {
  const proj = new Project();
  const data = { name: 'test' };
  proj.addResource(key, data);

  proj[key].observeDeep((events) => {
    done();
  });
  proj[key].get(0).set('name', 'new name');
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

describe('Project', function () {
  describe('.toJSON()', function () {
    it('should return JSON object', function () {
      const proj = new Project();
      const json = proj.toJSON();
      assert.equal(json.asset.version, '2.0');
    });
  });

  describe('.mergeJSON()', function () {
    function makeNode(name) {
      return {
        name,
        extensions: {
          ZF_id: {
            id: name,
          },
        },
      };
    }

    it('should append new items', function () {
      const proj = new Project();
      proj.mergeJSON({ nodes: [makeNode('test')] });
      assert.equal(proj.nodes.get(0).get('name'), 'test');
      assert.equal(proj.nodes.length, 1);
      proj.mergeJSON({ nodes: [makeNode('test2')] });
      assert.equal(proj.nodes.length, 2);
      assert.equal(proj.nodes.get(1).get('name'), 'test2');
    });

    it('should replace existing items', function () {
      const proj = new Project();
      proj.mergeJSON({ nodes: [makeNode('test')] });
      assert.equal(proj.nodes.get(0).get('name'), 'test');
      assert.equal(proj.nodes.length, 1);
      proj.mergeJSON({ nodes: [makeNode('test')] });
      assert.equal(proj.nodes.length, 1);
    });
  });

  it('should sync extensionsUsed data', function (done) {
    testListProperty('extensionsUsed', done);
  });

  it('should sync extensionsRequired data', function (done) {
    testListProperty('extensionsRequired', done);
  });

  it('should sync accessors data', function (done) {
    testListProperty('accessors', done);
  });

  it('should sync asset data', function (done) {
    testMapProperty('asset', done);
  });

  it('should sync animations data', function (done) {
    testListProperty('animations', done);
  });

  it('should sync buffers data', function (done) {
    testListProperty('buffers', done);
  });

  it('should sync bufferViews data', function (done) {
    testListProperty('bufferViews', done);
  });

  it('should sync cameras data', function (done) {
    testListProperty('cameras', done);
  });

  it('should sync images data', function (done) {
    testListProperty('images', done);
  });

  it('should sync materials data', function (done) {
    testListProperty('materials', done);
  });

  it('should sync meshes data', function (done) {
    testListProperty('meshes', done);
  });

  it('should sync nodes data', function (done) {
    testListProperty('nodes', done);
  });

  it('should sync samplers data', function (done) {
    testListProperty('samplers', done);
  });

  it('should sync scene data', function (done) {
    testValueProperty('scene', done);
  });

  it('should sync scenes data', function (done) {
    testListProperty('scenes', done);
  });

  it('should sync skins data', function (done) {
    testListProperty('skins', done);
  });

  it('should sync textures data', function (done) {
    testListProperty('textures', done);
  });

  it('should sync extensions data', function (done) {
    testMapProperty('extensions', done);
  });

  it('should sync extras data', function (done) {
    testMapProperty('extras', done);
  });
});
