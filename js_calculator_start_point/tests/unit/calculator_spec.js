var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('can add 1 and 4 to get 5', function(){
    calculator.previousTotal = `1`;
    calculator.add(`4`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 5)
  })

  it('can subtract 4 from 7 to get 3', function(){
    calculator.previousTotal = `7`;
    calculator.subtract(`4`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 3)
  })

});
