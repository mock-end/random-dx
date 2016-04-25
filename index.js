'use strict';

var randomNatural = require('random-natural');

var dice = [4, 6, 8, 10, 12, 20, 30, 100];

dice.forEach(function (d) {
  exports['d' + d] = function () {
    return randomNatural({
      min: 1,
      max: d,
      inspected: true
    });
  };
});
