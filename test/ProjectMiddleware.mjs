import { assert } from 'chai';

import ProjectMiddleware from '../src/ProjectMiddleware.mjs';

describe('ProjectMiddleware', function () {
  it('should construct', function () {
    const mw = new ProjectMiddleware();
    assert.exists(mw);
  });
});
