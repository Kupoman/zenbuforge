import { assert } from 'chai';

import WebSystemMiddleware from '../src/WebSystemMiddleware.mjs';

describe('WebSystemMiddleware', function () {
  it('should construct', function () {
    const mw = new WebSystemMiddleware();
    assert.exists(mw);
  });
});
