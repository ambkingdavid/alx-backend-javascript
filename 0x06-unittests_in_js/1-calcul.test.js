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
    it('should return 0 when adding two zeros', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('should add positive numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 5, 10), 15);
    });

    it('should add negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -5, -10), -15);
    });

    it('should handle decimal numbers by rounding', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 4.7), 7);
    });

    it('should add a large positive number to a small negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 1000000, -0.000001), 1000000);
    });

    it('should add a large negative number to a small positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -1000000, 0.000001), -1000000);
    });

    it('should handle adding numbers with different precisions', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    });

    it('should handle adding zero to a large positive number', () => {
      assert.strictEqual(calculateNumber('SUM', 1000000, 0), 1000000);
    });

    it('should handle adding zero to a large negative number', () => {
      assert.strictEqual(calculateNumber('SUM', -1000000, 0), -1000000);
    });

    it('should add numbers where one is very close to zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0.000001, 0.000002), 0);
    });
  });

  // Test cases for SUBTRACT type
  describe('SUBTRACT', () => {
    it('should return 0 when subtracting zero from zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('should subtract positive numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 15, 10), 5);
    });

    it('should subtract negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5, -10), 5);
    });

    it('should handle decimal numbers by rounding', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 2.3), 3);
    });

    it('should subtract a large positive number from a small negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.000001, -1000000), 1000000);
    });

    it('should subtract a large negative number from a small positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.000001, 1000000), -1000000);
    });

    it('should handle subtracting numbers with different precisions', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.2, 0.1), 0); // Rounded to 1 decimal place
    });

    it('should handle subtracting a large positive number from zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 1000000), -1000000);
    });

    it('should handle subtracting zero from a large negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1000000, 0), -1000000);
    });

    it('should subtract numbers where one is very close to zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.000002, 0.000001), 0);
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
