import assert from 'assert';

import * as jsonpatch from 'fast-json-patch';

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

function waitForUpdate(proj) {
  return new Promise((resolve) => {
    proj.observe((event) => resolve(event));
  });
}

function testListProperty(key) {
  return makeProject()
    .then((proj) => {
      const wait = waitForUpdate(proj);
      proj.jsonProxy[key].push('test');
      return wait;
    });
}

async function testCollectionProperty(key) {
  const proj = await makeProject();
  proj.jsonProxy[key].id = {
    id: 'id',
    name: 'test',
  };
  const wait = waitForUpdate(proj);

  proj.jsonProxy[key].id.name = 'new name';
  await wait;
}

async function testMapProperty(key) {
  const proj = await makeProject();
  const wait = waitForUpdate(proj);
  proj.jsonProxy[key].key = 'value';
  await wait;
}

async function testValueProperty(key) {
  const proj = await makeProject();
  const wait = waitForUpdate(proj);
  proj.jsonProxy[key] = 'value';
  await wait;
}

function makeNodeGltf(name) {
  return {
    nodes: [{
      name,
      translation: [0.0, 0.0, 0.0],
      extensions: {
        ZF_id: {
          id: name,
        },
      },
    }],
  };
}

function addResource(proj, key, json) {
  const patch = [{
    op: 'add',
    path: `/${key}`,
    value: json,
  }];
  jsonpatch.default.applyPatch(proj.jsonProxy, patch, true, true, true);
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
          addResource(proj, 'nodes/test', gltf.nodes[0]);
        });
    });

    it('should generate update actions', async function () {
      const proj = await makeProject();
      const gltf = makeNodeGltf('test');
      addResource(proj, 'nodes/test', gltf.nodes[0]);
      const wait = waitForUpdate(proj);
      proj.jsonProxy.nodes.test.name = 'new name';
      return wait.then((event) => {
        assert.equal(event.key, 'nodes');
        assert.equal(event.id, 'test');
        const expected = JSON.parse(JSON.stringify(gltf.nodes[0]));
        expected.name = 'new name';
        assert.equal(event.action, 'update');
        assert.deepEqual(event.data, expected);
      });
    });

    it('should generate delete actions', async function () {
      const proj = await makeProject();
      const node = makeNodeGltf('test');
      addResource(proj, 'nodes/test', node.nodes[0]);
      proj.jsonProxy.nodes.test.name = 'new name';
      const wait = waitForUpdate(proj);
      delete proj.jsonProxy.nodes.test;
      return wait.then((event) => {
        assert.equal(event.key, 'nodes');
        assert.equal(event.id, 'test');
        assert.equal(event.action, 'delete');
        assert.equal(event.gltf, null);
      });
    });
  });

  it.skip('should append new items', function () {
    return makeProject()
      .then((proj) => proj.mergeJSON(makeNodeGltf('test')))
      .then((proj) => proj.mergeJSON(makeNodeGltf('test2')))
      .then((proj) => {
        assert.equal(Object.keys(proj.jsonProxy.nodes).length, 2);
      });
  });

  it.skip('should replace existing items', function () {
    return makeProject()
      .then((proj) => proj.mergeJSON(makeNodeGltf('test')))
      .then((proj) => proj.mergeJSON(makeNodeGltf('test')))
      .then((proj) => {
        assert.equal(Object.keys(proj.jsonProxy.nodes).length, 1);
      });
  });

  it('should sync extensionsUsed data', function () {
    return testListProperty('extensionsUsed');
  });

  it('should sync extensionsRequired data', function () {
    return testListProperty('extensionsRequired');
  });

  it('should sync accessors data', function () {
    return testCollectionProperty('accessors');
  });

  it('should sync asset data', function () {
    return testMapProperty('asset');
  });

  it('should sync animations data', function () {
    return testCollectionProperty('animations');
  });

  it('should sync buffers data', function () {
    return testCollectionProperty('buffers');
  });

  it('should sync bufferViews data', function () {
    return testCollectionProperty('bufferViews');
  });

  it('should sync cameras data', function () {
    return testCollectionProperty('cameras');
  });

  it('should sync images data', function () {
    return testCollectionProperty('images');
  });

  it('should sync materials data', function () {
    return testCollectionProperty('materials');
  });

  it('should sync meshes data', function () {
    return testCollectionProperty('meshes');
  });

  it('should sync nodes data', function () {
    return testCollectionProperty('nodes');
  });

  it('should sync samplers data', function () {
    return testCollectionProperty('samplers');
  });

  it('should sync scene data', function () {
    return testValueProperty('scene');
  });

  it('should sync scenes data', function () {
    return testCollectionProperty('scenes');
  });

  it('should sync skins data', function () {
    return testCollectionProperty('skins');
  });

  it('should sync textures data', function () {
    return testCollectionProperty('textures');
  });

  it('should sync extensions data', function () {
    return testMapProperty('extensions');
  });

  it('should sync extras data', function () {
    return testMapProperty('extras');
  });
});
