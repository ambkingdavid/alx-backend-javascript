const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 for type ADD with input values 1 and 3', () => {
    assert.strictEqual(calculateNumber('ADD', 1, 3), 4);
  });

  it('should return -4 for type SUBTRACT with input values -1 and -3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
  });

  it('should return 5 for type ADD with input values 1.2 and 3.4', () => {
    assert.strictEqual(calculateNumber('ADD', 1.2, 3.4), 4);
  });

  it('should return 5 for type SUBTRACT with input values 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });

  it('should return 5 for type DIVIDE with input values 1.49 and 3.51', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.49, 3.51), 0.25);
  });

  it('should return 3e20 for type ADD with input values 1e20 and 2e20', () => {
    assert.strictEqual(calculateNumber('ADD', 1e20, 2e20), 3e20);
  });

  it('should return 0 for type SUBTRACT with input values 0 and 0', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
  });

  it('should return 4 for type ADD with input values 1.25 and 2.25', () => {
    assert.strictEqual(calculateNumber('ADD', 1.25, 2.25), 3);
  });

  it('should return 4 for type ADD with input values 1.25 and 2.75', () => {
    assert.strictEqual(calculateNumber('ADD', 1.25, 2.75), 4);
  });

  it('should return 0.5 for type DIVIDE with input values 1 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
  });

  it('should return NaN for type DIVIDE with input values 1 and 0', () => {
    const result = calculateNumber('DIVIDE', 1, 0);
    assert.strictEqual(result, Infinity);
  });
});
