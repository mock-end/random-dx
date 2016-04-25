'use strict';

var expect = require('chai').expect;


describe('random-dx: ', function () {

  var dice = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(dice.d4()).to.be.within(1, 4);
      expect(dice.d6()).to.be.within(1, 6);
      expect(dice.d8()).to.be.within(1, 8);
      expect(dice.d10()).to.be.within(1, 10);
      expect(dice.d12()).to.be.within(1, 12);
      expect(dice.d20()).to.be.within(1, 20);
      expect(dice.d30()).to.be.within(1, 30);
      expect(dice.d100()).to.be.within(1, 100);
    }
  });
});
