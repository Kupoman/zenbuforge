import assert from 'assert';

import * as Utils from '../lib/Utils.mjs';

describe('Utils', function () {
  describe('.isDefined()', function () {
    it('should return false on undefined', function () {
      assert.equal(false, Utils.isDefined(undefined));
    });

    it('should return false on null', function () {
      assert.equal(false, Utils.isDefined(null));
    });

    it('should return true on 0', function () {
      assert.equal(true, Utils.isDefined(0));
    });
  });

  describe('.isObjectChanged()', function () {
    it('should return false if input is missing', function () {
      assert.equal(false, Utils.isObjectChanged());
      assert.equal(false, Utils.isObjectChanged(null));
      assert.equal(false, Utils.isObjectChanged(null, null));
    });

    it('should return false if string property is unchanged', function () {
      const a = { name: 'a' };
      const b = { name: 'a' };
      assert.equal(false, Utils.isObjectChanged(a, b));
    });

    it('should return true if string property is changed', function () {
      const a = { name: 'a' };
      const b = { name: 'b' };
      assert.equal(true, Utils.isObjectChanged(a, b));
    });

    it('should return false if array property is unchanged', function () {
      const a = { name: [] };
      const b = { name: [] };
      assert.equal(false, Utils.isObjectChanged(a, b));
    });

    it('should return true if array property is changed', function () {
      const a = { name: ['a'] };
      const b = { name: ['b'] };
      assert.equal(true, Utils.isObjectChanged(a, b));
    });
  });
});
