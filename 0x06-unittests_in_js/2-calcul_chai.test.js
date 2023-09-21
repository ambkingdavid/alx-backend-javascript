const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai'); // Replace with the actual module path

describe('calculateNumber', () => {
  describe('INVALID TYPE', () => {
    it('should return NULL when an invalid type is used', () => {
      expect(calculateNumber('MULTIPLY', 5, 10)).to.be.null;
    });
  });

  // Test cases for ADD type
  describe('ADD', () => {
    it('should return 4 for input values 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return -4 for input values -1 and -3', () => {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });

    it('should return 4 for input values 1.2 and 3.4', () => {
      expect(calculateNumber('SUM', 1.2, 3.4)).to.equal(4);
    });

    it('should return 6 for input values 1.5 and 3.7', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should return 5 for input values 1.49 and 3.51', () => {
      expect(calculateNumber('SUM', 1.49, 3.51)).to.equal(5);
    });

    it('should return 3e20 for input values 1e20 and 2e20', () => {
      expect(calculateNumber('SUM', 1e20, 2e20)).to.equal(3e20);
    });

    it('should return 0 for input values 0 and 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should return 3 for input values 1.25 and 2.25', () => {
      expect(calculateNumber('SUM', 1.25, 2.25)).to.equal(3);
    });

    it('should return 4 for input values 1.25 and 2.75', () => {
      expect(calculateNumber('SUM', 1.25, 2.75)).to.equal(4);
    });
  });

  // Test cases for SUBTRACT type
  describe('SUBTRACT', () => {
    it('should return 0 when (0 - 0)', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('should return 5 when (15 - 10)', () => {
      expect(calculateNumber('SUBTRACT', 15, 10)).to.equal(5);
    });

    it('should subtract negative numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', -5, -10)).to.equal(5);
    });

    it('should handle decimal numbers by rounding', () => {
      expect(calculateNumber('SUBTRACT', 4.7, 2.3)).to.equal(3);
    });

    it('should handle decimal numbers by rounding', () => {
      expect(calculateNumber('SUBTRACT', -4.7, 2.3)).to.equal(-7);
    });

    it('should subtract a large negative number from a small positive number', () => {
      expect(calculateNumber('SUBTRACT', 1e20, 2e20)).to.equal(-1e20);
    });

    it('should handle subtracting decimal numbers', () => {
      expect(calculateNumber('SUBTRACT', -4.7, -2.3)).to.equal(-3);
    });

    it('should handle subtracting a large positive number from zero', () => {
      expect(calculateNumber('SUBTRACT', -1e20, 2e20)).to.equal(-3e20);
    });

    it('should handle subtracting zero from a large negative number', () => {
      expect(calculateNumber('SUBTRACT', -1e20, -2e20)).to.equal(1e20);
    });
  });

  // Test cases for DIVIDE type
  describe('DIVIDE', () => {
    it('should return Error when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });

    it('should divide positive numbers correctly', () => {
      expect(calculateNumber('DIVIDE', 15, 3)).to.equal(5);
    });

    it('should divide negative numbers correctly', () => {
      expect(calculateNumber('DIVIDE', -10, -2)).to.equal(5);
    });

    it('should handle decimal numbers by rounding', () => {
      expect(calculateNumber('DIVIDE', 7.5, 2)).to.equal(4);
    });

    it('should handle dividing a very small positive number by a large positive number', () => {
      expect(calculateNumber('DIVIDE', 0.000001, 1000000)).to.equal(0);
    });

    it('should handle dividing a very small negative number by a large negative number', () => {
      expect(calculateNumber('DIVIDE', -0.000001, -1000000)).to.equal(0);
    });

    it('should handle dividing zero by a large positive number', () => {
      expect(calculateNumber('DIVIDE', 0, 1000000)).to.equal(0);
    });

    it('should handle dividing a large positive number by zero', () => {
      expect(calculateNumber('DIVIDE', 1000000, 0)).to.equal('Error');
    });

    it('should handle dividing a very small positive number by a very small positive number', () => {
      expect(calculateNumber('DIVIDE', 0.000001, 0.000002)).to.equal('Error');
    });
  });
});
