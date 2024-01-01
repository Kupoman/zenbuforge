import assert from 'assert';

import Project from '../lib/Project.mjs';

function createProjects() {
  const doc1 = new Project();
  const doc2 = new Project({
    ydoc: doc1.ydoc,
  });
  return [doc1, doc2];
}

function testListProperty(key) {
  const [doc1, doc2] = createProjects();
  const data = { name: 'test' };
  doc1[key].push(data);
  assert.equal(doc2[key].length, 1);
  assert.equal(doc2[key][0].name, doc1[key][0].name);
}

function testMapProperty(key) {
  const [doc1, doc2] = createProjects();
  doc1[key].key = 'data';
  assert.equal(doc2[key].key, doc1[key].key);
}

function testValueProperty(key) {
  const [doc1, doc2] = createProjects();
  doc1[key] = 2;
  assert.equal(doc2[key], doc1[key]);
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
      assert.equal(proj.nodes[0].name, 'test');
      assert.equal(proj.nodes.length, 1);
      proj.mergeJSON({ nodes: [makeNode('test2')] });
      assert.equal(proj.nodes.length, 2);
      assert.equal(proj.nodes[1].name, 'test2');
    });

    it('should replace existing items', function () {
      const proj = new Project();
      proj.mergeJSON({ nodes: [makeNode('test')] });
      assert.equal(proj.nodes[0].name, 'test');
      assert.equal(proj.nodes.length, 1);
      proj.mergeJSON({ nodes: [makeNode('test')] });
      assert.equal(proj.nodes.length, 1);
    });
  });

  it('should sync extensionsUsed data', function () {
    testListProperty('extensionsUsed');
  });

  it('should sync extensionsRequired data', function () {
    testListProperty('extensionsRequired');
  });

  it('should sync accessors data', function () {
    testListProperty('accessors');
  });

  it('should sync asset data', function () {
    testMapProperty('asset');
  });

  it('should sync animations data', function () {
    testListProperty('animations');
  });

  it('should sync buffers data', function () {
    testListProperty('buffers');
  });

  it('should sync bufferViews data', function () {
    testListProperty('bufferViews');
  });

  it('should sync cameras data', function () {
    testListProperty('cameras');
  });

  it('should sync images data', function () {
    testListProperty('images');
  });

  it('should sync materials data', function () {
    testListProperty('materials');
  });

  it('should sync meshes data', function () {
    testListProperty('meshes');
  });

  it('should sync nodes data', function () {
    testListProperty('nodes');
  });

  it('should sync samplers data', function () {
    testListProperty('samplers');
  });

  it('should sync scene data', function () {
    testValueProperty('scene');
  });

  it('should sync scenes data', function () {
    testListProperty('scenes');
  });

  it('should sync skins data', function () {
    testListProperty('skins');
  });

  it('should sync textures data', function () {
    testListProperty('textures');
  });

  it('should sync extensions data', function () {
    testMapProperty('extensions');
  });

  it('should sync extras data', function () {
    testMapProperty('extras');
  });
});
