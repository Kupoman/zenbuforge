import assert from 'assert';

import Project from '../src/Project.mjs';

function makeProject() {
  const persistence = {
    init: () => Promise.resolve(),
  };
  const project = new Project({
    persistence,
  });

  return Promise.resolve()
    .then(() => project.init())
    .then(() => project.update())
    .then(() => project);
}

function waitForYUpdate(proj) {
  return new Promise((resolve) => {
    proj.ymap.observeDeep((event) => resolve(event));
  });
}

function testListProperty(key) {
  return makeProject()
    .then((proj) => {
      const wait = waitForYUpdate(proj);
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
  const wait = waitForYUpdate(proj);

  proj.jsonProxy[key].id.name = 'new name';
  await wait;
}

async function testMapProperty(key) {
  const proj = await makeProject();
  const wait = waitForYUpdate(proj);
  proj.jsonProxy[key].key = 'value';
  await wait;
}

async function testValueProperty(key) {
  const proj = await makeProject();
  const wait = waitForYUpdate(proj);
  proj.jsonProxy[key] = 'value';
  await wait;
}

describe('Project', function () {
  describe('.toJSON()', function () {
    it('should return JSON object', async function () {
      const proj = await makeProject();
      const json = proj.toJSON();
      assert.equal(json.asset.version, '2.0');
    });
  });

  it('should return patch from .update()', async function () {
    const proj = await makeProject();
    const patch = [
      {
        op: 'add',
        path: '/nodes/a',
        value: {},
      },
      {
        op: 'add',
        path: '/nodes/b',
        value: {},
      },
    ];
    proj.patch([patch[0]]);
    proj.patch([patch[1]]);

    assert.deepEqual(proj.update(), patch);
    assert.deepEqual(proj.update(), []);
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
