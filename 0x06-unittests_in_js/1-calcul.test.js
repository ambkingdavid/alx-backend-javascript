const assert = require('assert');
const calculateNumber = require('./1-calcul'); // Replace with the actual module path

describe('calculateNumber', () => {
  describe('INVALID TYPE', () => {
    it('should return NULL when an invalid type is used', () => {
      assert.strictEqual(calculateNumber('MULTIPLY', 5, 10), null);
    });
  });
  // Test cases for ADD type
  describe('ADD', () => {
    it('should return 4 for input values 1 and 3', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  
    it('should return -4 for input values -1 and -3', () => {
      assert.strictEqual(calculateNumber(-1, -3), -4);
    });
  
    it('should return 5 for input values 1.2 and 3.4', () => {
      assert.strictEqual(calculateNumber(1.2, 3.4), 4);
    });
  
    it('should return 5 for input values 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  
    it('should return 5 for input values 1.49 and 3.51', () => {
      assert.strictEqual(calculateNumber(1.49, 3.51), 5);
    });
  
    it('should return 3e20 for input values 1e20 and 2e20', () => {
      assert.strictEqual(calculateNumber(1e20, 2e20), 3e20);
    });
  
    it('should return 0 for input values 0 and 0', () => {
      assert.strictEqual(calculateNumber(0, 0), 0);
    });
  
    it('should return 4 for input values 1.25 and 2.25', () => {
      assert.strictEqual(calculateNumber(1.25, 2.25), 3);
    });
  
    it('should return 4 for input values 1.25 and 2.75', () => {
      assert.strictEqual(calculateNumber(1.25, 2.75), 4);
    });
  });

  // Test cases for SUBTRACT type
  describe('SUBTRACT', () => {
    it('should return 0 when (0 - 0)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('should return 5 when (15 - 10)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 15, 10), 5);
    });

    it('should subtract negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5, -10), 5);
    });

    it('should handle decimal numbers by rounding', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 2.3), 3);
    });

    it('should handle decimal numbers by rounding', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.7, 2.3), -7);
    });

    it('should subtract a large negative number from a small positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1e20, 2e20), -1e20);
    });

    it('should handle subtracting decimal numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.7, -2.3), -3);
    });

    it('should handle subtracting a large positive number from zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1e20, 2e20), -3e20);
    });

    it('should handle subtracting zero from a large negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1e20, -2e20), 1e20);
    });
  });

  // Test cases for DIVIDE type
  describe('DIVIDE', () => {
    it('should return NaN when dividing by zero', () => {
      assert.strictEqual(isNaN(calculateNumber('DIVIDE', 5, 0)), false);
    });

    it('should divide positive numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 15, 3), 5);
    });

    it('should divide negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -10, -2), 5);
    });

    it('should handle decimal numbers by rounding', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 2), 4);
    });

    it('should handle dividing a very small positive number by a large positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.000001, 1000000), 0);
    });

    it('should handle dividing a very small negative number by a large negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -0.000001, -1000000), 0);
    });

    it('should handle dividing zero by a large positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 1000000), 0);
    });

    it('should handle dividing a large positive number by zero', () => {
      assert.strictEqual(isNaN(calculateNumber('DIVIDE', 1000000, 0)), false);
    });

    it('should handle dividing a very small positive number by a very small positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.000001, 0.000002), NaN);
    });
  });
});
