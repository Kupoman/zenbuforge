import assert from 'assert';

import * as GltfUtils from '../src/GltfUtils.mjs';

describe('GltfUtils', function () {
  describe('.toMapRefs()', function () {
    const id = 'test';
    function makeTestObj(sourceCollection, prop, refCollection) {
      const obj = {
        [refCollection]: [
          {
            extras: { id },
          },
        ],
        [sourceCollection]: [
          {
            [prop]: 0,
            extras: { id: 'check' },
          },
        ],
      };
      GltfUtils.ensureLightExtension(obj);
      return obj;
    }

    it('should ensure IDs', function () {
      const noExtras = {
        nodes: [{}],
      };
      GltfUtils.ensureLightExtension(noExtras);
      GltfUtils.toMapRefs(noExtras);
      assert(Object.values(noExtras.nodes)[0].extras.id);
      const withExtras = {
        nodes: [{
          extras: {
            foo: 'bar',
          },
        }],
      };
      GltfUtils.ensureLightExtension(withExtras);
      GltfUtils.toMapRefs(withExtras);
      assert(Object.values(withExtras.nodes)[0].extras.id);
      assert.equal('bar', withExtras.nodes[0].extras.foo);
    });

    it('should update bufferViews.buffer', function () {
      const obj = makeTestObj('bufferViews', 'buffer', 'buffers');
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.bufferViews[0].buffer);
    });

    it('should update accessors.bufferView', function () {
      const obj = makeTestObj('accessors', 'bufferView', 'bufferViews');
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.accessors[0].bufferView);
    });

    it('should update textures.source', function () {
      const obj = makeTestObj('textures', 'source', 'images');
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.textures[0].source);
    });

    it('should update textures.sampler', function () {
      const obj = makeTestObj('textures', 'sampler', 'samplers');
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.textures[0].sampler);
    });

    it('should update materials.normalTexture', function () {
      const obj = makeTestObj('materials', 'normalTexture', 'textures');
      obj.materials[0].normalTexture = {
        index: 0,
      };
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.materials[0].normalTexture.index);
    });

    it('should update materials.occlusionTexture', function () {
      const obj = makeTestObj('materials', 'occlusionTexture', 'textures');
      obj.materials[0].occlusionTexture = {
        index: 0,
      };
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.materials[0].occlusionTexture.index);
    });

    it('should update materials.emissiveTexture', function () {
      const obj = makeTestObj('materials', 'emissiveTexture', 'textures');
      obj.materials[0].emissiveTexture = {
        index: 0,
      };
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.materials[0].emissiveTexture.index);
    });

    it('should update materials.pbrMetallicRoughness.baseColorTexture', function () {
      const obj = makeTestObj('materials', 'pbrMetallicRoughness', 'textures');
      obj.materials[0].pbrMetallicRoughness = {
        baseColorTexture: { index: 0 },
      };
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.materials[0].pbrMetallicRoughness.baseColorTexture.index);
    });

    it('should update materials.pbrMetallicRoughness.metallicRoughnessTexture', function () {
      const obj = makeTestObj('materials', 'pbrMetallicRoughness', 'textures');
      obj.materials[0].pbrMetallicRoughness = {
        metallicRoughnessTexture: { index: 0 },
      };
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.materials[0].pbrMetallicRoughness.metallicRoughnessTexture.index);
    });

    it('should update meshes.primitives.material', function () {
      const obj = makeTestObj('meshes', 'primitives', 'materials');
      obj.meshes[0].primitives = [{
        material: 0,
      }];
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.meshes[0].primitives[0].material);
    });

    it('should update meshes.primitives.indices', function () {
      const obj = makeTestObj('meshes', 'primitives', 'accessors');
      obj.meshes[0].primitives = [{
        indices: 0,
      }];
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.meshes[0].primitives[0].indices);
    });

    it('should update meshes.primitives.attributes', function () {
      const obj = makeTestObj('meshes', 'primitives', 'accessors');
      obj.meshes[0].primitives = [{
        attributes: {
          POSITION: 0,
          NORMAL: 0,
        },
      }];
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.meshes[0].primitives[0].attributes.POSITION);
      assert.equal(id, obj.meshes[0].primitives[0].attributes.NORMAL);
    });

    it('should update nodes.mesh', function () {
      const obj = makeTestObj('nodes', 'mesh', 'meshes');
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.nodes[0].mesh);
    });

    it('should update nodes.camera', function () {
      const obj = makeTestObj('nodes', 'camera', 'cameras');
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.nodes[0].camera);
    });

    it('should update nodes.light', function () {
      const obj = makeTestObj('nodes', '', 'lights');
      obj.nodes[0].extensions = {
        KHR_lights_punctual: {
          light: 0,
        },
      };
      obj.extensions = {
        KHR_lights_punctual: {
          lights: obj.lights,
        },
      };
      delete obj.lights;
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.nodes[0].extensions.KHR_lights_punctual.light);
    });

    it('should update nodes.children', function () {
      const obj = makeTestObj('nodes', 'children', 'nodes2');
      obj.nodes.push(obj.nodes2[0]);
      obj.nodes[0].children = [1];
      delete obj.nodes2;
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.nodes[0].children[0]);
    });

    it('should update scene.nodes', function () {
      const obj = makeTestObj('scenes', 'nodes', 'nodes');
      obj.scenes[0].nodes = [0];
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.scenes[0].nodes[0]);
    });
  });

  describe('.toArrayRefs()', function () {
    const id = 'test';
    function makeTestObj(sourceCollection, prop, refCollection) {
      const obj = {
        [refCollection]: [
          {
            extras: { id },
          },
        ],
        [sourceCollection]: [
          {
            [prop]: id,
            extras: { id: 'check' },
          },
        ],
      };
      GltfUtils.ensureLightExtension(obj);
      return obj;
    }

    it('should update bufferViews.buffer', function () {
      const obj = makeTestObj('bufferViews', 'buffer', 'buffers');
      GltfUtils.toMapRefs(obj);
      assert.equal(id, obj.bufferViews[0].buffer);
    });

    //it('should update accessors.bufferView', function () {
    //  const obj = makeTestObj('accessors', 'bufferView', 'bufferViews');
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.accessors[0].bufferView);
    //});

    //it('should update textures.source', function () {
    //  const obj = makeTestObj('textures', 'source', 'images');
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.textures[0].source);
    //});

    //it('should update textures.sampler', function () {
    //  const obj = makeTestObj('textures', 'sampler', 'samplers');
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.textures[0].sampler);
    //});

    //it('should update materials.normalTexture', function () {
    //  const obj = makeTestObj('materials', 'normalTexture', 'textures');
    //  obj.materials[0].normalTexture = {
    //    index: 0,
    //  };
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.materials[0].normalTexture.index);
    //});

    //it('should update materials.occlusionTexture', function () {
    //  const obj = makeTestObj('materials', 'occlusionTexture', 'textures');
    //  obj.materials[0].occlusionTexture = {
    //    index: 0,
    //  };
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.materials[0].occlusionTexture.index);
    //});

    //it('should update materials.emissiveTexture', function () {
    //  const obj = makeTestObj('materials', 'emissiveTexture', 'textures');
    //  obj.materials[0].emissiveTexture = {
    //    index: 0,
    //  };
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.materials[0].emissiveTexture.index);
    //});

    //it('should update materials.pbrMetallicRoughness.baseColorTexture', function () {
    //  const obj = makeTestObj('materials', 'pbrMetallicRoughness', 'textures');
    //  obj.materials[0].pbrMetallicRoughness = {
    //    baseColorTexture: { index: 0 },
    //  };
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.materials[0].pbrMetallicRoughness.baseColorTexture.index);
    //});

    //it('should update materials.pbrMetallicRoughness.metallicRoughnessTexture', function () {
    //  const obj = makeTestObj('materials', 'pbrMetallicRoughness', 'textures');
    //  obj.materials[0].pbrMetallicRoughness = {
    //    metallicRoughnessTexture: { index: 0 },
    //  };
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.materials[0].pbrMetallicRoughness.metallicRoughnessTexture.index);
    //});

    //it('should update meshes.primitives.material', function () {
    //  const obj = makeTestObj('meshes', 'primitives', 'materials');
    //  obj.meshes[0].primitives = [{
    //    material: 0,
    //  }];
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.meshes[0].primitives[0].material);
    //});

    //it('should update meshes.primitives.indices', function () {
    //  const obj = makeTestObj('meshes', 'primitives', 'accessors');
    //  obj.meshes[0].primitives = [{
    //    indices: 0,
    //  }];
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.meshes[0].primitives[0].indices);
    //});

    //it('should update meshes.primitives.attributes', function () {
    //  const obj = makeTestObj('meshes', 'primitives', 'accessors');
    //  obj.meshes[0].primitives = [{
    //    attributes: {
    //      POSITION: 0,
    //      NORMAL: 0,
    //    },
    //  }];
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.meshes[0].primitives[0].attributes.POSITION);
    //  assert.equal(id, obj.meshes[0].primitives[0].attributes.NORMAL);
    //});

    //it('should update nodes.mesh', function () {
    //  const obj = makeTestObj('nodes', 'mesh', 'meshes');
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.nodes[0].mesh);
    //});

    //it('should update nodes.camera', function () {
    //  const obj = makeTestObj('nodes', 'camera', 'cameras');
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.nodes[0].camera);
    //});

    //it('should update nodes.light', function () {
    //  const obj = makeTestObj('nodes', '', 'lights');
    //  obj.nodes[0].extensions = {
    //    KHR_lights_punctual: {
    //      light: 0,
    //    },
    //  };
    //  obj.extensions = {
    //    KHR_lights_punctual: {
    //      lights: obj.lights,
    //    },
    //  };
    //  delete obj.lights;
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.nodes[0].extensions.KHR_lights_punctual.light);
    //});

    //it('should update nodes.children', function () {
    //  const obj = makeTestObj('nodes', 'children', 'nodes2');
    //  obj.nodes.push(obj.nodes2[0]);
    //  obj.nodes[0].children = [1];
    //  delete obj.nodes2;
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.nodes[0].children[0]);
    //});

    //it('should update scene.nodes', function () {
    //  const obj = makeTestObj('scenes', 'nodes', 'nodes');
    //  obj.scenes[0].nodes = [0];
    //  GltfUtils.toMapRefs(obj);
    //  assert.equal(id, obj.scenes[0].nodes[0]);
    //});
  });
});
