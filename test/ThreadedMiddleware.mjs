import { assert } from 'chai';

import ThreadedMiddleware from '../src/ThreadedMiddleware.mjs';

describe('ThreadedMiddleware', function () {
  it('should construct', function () {
    const mw = new ThreadedMiddleware();
    assert.exists(mw);
  });
});
