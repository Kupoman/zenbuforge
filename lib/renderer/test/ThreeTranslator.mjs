import { assert } from 'chai';

import ThreeTranslator from '../ThreeTranslator.mjs';

describe('ThreeTranslator', function () {
  it('should construct', function () {
    const translator = new ThreeTranslator();
    assert.exists(translator);
  });
});
