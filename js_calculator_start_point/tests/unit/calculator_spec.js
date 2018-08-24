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
  });

  it('can subtract 4 from 7 to get 3', function(){
    calculator.previousTotal = `7`;
    calculator.subtract(`4`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 3)
  });

  it('can multiply 3 and 5 to get 15', function(){
    calculator.previousTotal = `3`;
    calculator.multiply(`5`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 15)
  });

  it('can divide 21 by 7 to get 3', function(){
    calculator.previousTotal = `21`;
    calculator.divide(`7`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 3)
  });

  it(`can register the number that has been be clicked and make that the running totla to start`, () => {
    calculator.numberClick(`1`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 1);
  })

  it(`can register the number that has been be clicked and concat the number to the running total if a number has already been clicked`, () => {
    calculator.numberClick(`1`);
    calculator.numberClick(`7`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 17);
  })

  it(`can add the running total to itself when add is clicked twice`, () => {
    calculator.numberClick(`1`);
    calculator.operatorClick(`+`);
    calculator.operatorClick(`+`);
    const result = calculator.runningTotal;
    assert.strictEqual(result, 2)
  });

  it(`can clear the screen if incorrect numbers selected, but keep the existing running total`, () => {
    calculator.numberClick(`1`);
    calculator.operatorClick(`+`);
    calculator.numberClick(`2`);
    calculator.operatorClick(`=`);
    calculator.operatorClick(`+`);
    calculator.numberClick(`2`);
    calculator.clearClick();
    calculator.numberClick(`3`);
    calculator.operatorClick(`=`);

    const result = calculator.previousTotal;
    assert.strictEqual(result, 6)
  })

});
