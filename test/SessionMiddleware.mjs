import { assert } from 'chai';

import SessionMiddleware from '../src/SessionMiddleware.mjs';

describe('SessionMiddleware', function () {
  it('should construct', function () {
    const mw = new SessionMiddleware();
    assert.exists(mw);
  });
});
