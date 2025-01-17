import { assert } from 'chai';

import Translator from '../translator.mjs';

function create() {
  return {
    isDestroyed: false
  };
}

function update(resource, resourceJson) {
  Object.assign(resource, resourceJson);
}

function destroy(resource) {
  resource.isDestroyed = true;
}

function makeTranslator() {
  const translator = new Translator();
  translator.registerCollection('/tests', create, update, destroy);
  translator.registerCollection('/moreTests', create, update, destroy);
  translator.setGltf({
    tests: {},
    moreTests: {},
    unregistered: {},
  });
  return translator;
}

describe('Translator', function () {
  describe('.destroy', function () {
    it('should destroy all resources', function () {
      const translator = makeTranslator();
      const resources = [];
      translator.applyJsonPatch([{
        op: 'add',
        path: '/tests/new',
        value: {},
      }]);
      resources.push(translator.collections['/tests'].get('new'));
      translator.applyJsonPatch([{
        op: 'add',
        path: '/moreTests/new',
        value: {},
      }]);
      resources.push(translator.collections['/moreTests'].get('new'));

      translator.destroy();
      resources.forEach((resource) => assert.strictEqual(resource.isDestroyed, true));
    });
  });
  describe('.applyJsonPatch', function () {
    it('should error on missing input', function () {
      const translator = makeTranslator();
      assert.throws(
        () => translator.applyJsonPatch(),
        TypeError,
      );
    });

    it('should do nothing on empty array', function () {
      const translator = makeTranslator();
      translator.applyJsonPatch([]);
      assert.isEmpty(translator.collections['/tests'].resources);
    });

    it('should manage resource lifecycle', function () {
      const translator = makeTranslator();
      assert.isEmpty(translator.collections['/tests'].resources);

      // Create
      translator.applyJsonPatch([{
        op: 'add',
        path: '/tests/new',
        value: {
          foo: 'bar',
        },
      }]);
      const test = translator.collections['/tests'].get('new');
      assert.exists(test);

      // Update
      translator.applyJsonPatch([{
        op: 'add',
        path: '/tests/new',
        value: {
          foo: 'bas',
        },
      }]);
      assert.strictEqual(test.foo, 'bas');

      // Destroy
      translator.applyJsonPatch([{
        op: 'remove',
        path: '/tests/new',
      }]);
      assert.strictEqual(test.isDestroyed, true);
    });

    it('should warn on unregistered collection', function () {
      const translator = makeTranslator();
      translator.applyJsonPatch([{
        op: 'remove',
        path: '/unregistered',
      }]);
      const warnings = translator.getWarnings();
      assert.include(warnings, 'Unable to find a collection for path /unregistered');
    });

    it('should not error on base collection updates', function () {
      const translator = makeTranslator();
      assert.doesNotThrow(() => {
        translator.applyJsonPatch([{
          op: 'remove',
          path: '/tests',
        }])
      });
    });
  });
});
