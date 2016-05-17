'use strict';

/**
 * module dependencies
 */

const sleep = require('../');

describe('Simple', function() {
  it('it works', function*() {
    const ms = 10;
    const x = Date.now();
    yield sleep(ms);
    const y = Date.now();
    (y - x).should.approximately(ms, 10);
  });
});