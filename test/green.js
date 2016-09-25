'use strict';

const Green = require('../').Green;
const should = require('should');
const $ms = require('ms');

describe('Green', function() {
  it('works', function*() {
    const green = Green({
      min: '0.001s',
      max: '0.1s',
      factor: '0.01s'
    });

    const arr = [];
    setTimeout(() => {
      arr.push(1);
    }, 50);

    let pre, cur;
    while (true) {
      if (!arr.length) {
        const cur = yield green.idle();
        if (pre) {
          (cur - pre).should.equal($ms('0.01s'));
        }
        pre = cur;
      } else {
        green.busy();
        should.not.exists(green.cur);
        break;
      }
    }
  });
});