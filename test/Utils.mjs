import assert from 'assert';

import * as Utils from '../src/Utils.mjs';

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
});
