'use strict';

/**
 * module dependencies
 */

const sleep = require('../');
const should = require('should');

describe('Simple', function() {
  it('check ms', function*() {
    should.throws(() => {
      sleep();
    }, /can not be empty/);

    // 0 is ok
    yield sleep(0);
  });

  it('it works', function*() {
    const ms = 10;
    const x = Date.now();
    yield sleep(ms);
    const y = Date.now();
    (y - x).should.approximately(ms, 10);
  });

  it('ms works', function*() {
    const x = Date.now();
    yield sleep('0.01s');
    const y = Date.now();
    (y - x).should.approximately(10, 10);
  });
});