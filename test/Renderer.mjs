import assert from 'assert';
import { readFile } from 'fs/promises';

import * as GltfUtils from '../lib/GltfUtils.mjs';
import Renderer from '../lib/Renderer.mjs';

const gltfBox = GltfUtils.addIdExtension(JSON.parse(
  await readFile('./test/Box.gltf'),
));

describe('Renderer', function () {
  const renderer = new Renderer(null);
  GltfUtils.COLLECTION_PROPS.forEach(function (key) {
    describe(key, function () {
      it('should create', function () {
        if (typeof gltfBox[key] === 'undefined') {
          this.skip();
        }
        const data = gltfBox[key][0];
        const id = GltfUtils.getId(data);
        const update = {
          action: 'add',
          key,
          id,
          data,
        };

        return Promise.resolve()
          .then(() => {
            if (key !== 'meshes') {
              return Promise.resolve();
            }
            const deps = gltfBox.accessors.map((acc, i) => {
              if (i === 0) {
                return Promise.resolve();
              }
              return renderer.handleUpdate({
                action: 'add',
                key: 'accessors',
                id: GltfUtils.getId(acc),
                data: acc,
              });
            });

            return Promise.all(deps);
          })
          .then(() => {
            if (key !== 'nodes') {
              return Promise.resolve();
            }
            const deps = gltfBox.nodes.map((node, i) => {
              if (i === 0) {
                return Promise.resolve();
              }
              return renderer.handleUpdate({
                action: 'add',
                key: 'nodes',
                id: GltfUtils.getId(node),
                data: node,
              });
            });

            return Promise.all(deps);
          })
          .then(() => renderer.handleUpdate(update))
          .then(() => {
            const result = renderer.data[key][id];
            if (key === 'buffers') {
              assert.equal(result instanceof ArrayBuffer, true);
            }

            if (key === 'bufferViews') {
              assert.equal(result instanceof ArrayBuffer, true);
            }

            if (key === 'accessors') {
              assert.equal(result.isBufferAttribute, true);
            }

            if (key === 'materials') {
              assert.equal(result.toJSON().metadata.type, 'Material');
            }

            if (key === 'meshes') {
              assert.equal(result.type, 'Mesh');
            }

            if (key === 'nodes') {
              assert.equal(result.children.length, 1);
            }

            if (key === 'scenes') {
              assert.equal(result.children.length, 1);
            }
          });
      });
      it('should delete', function () {
        const id = 'test';
        renderer.data[key][id] = {};
        const promise = renderer.handleUpdate({
          action: 'delete',
          key,
          id,
        });

        return promise
          .then(() => assert.equal(renderer.data[key][id], undefined));
      });
    });
  });
});
