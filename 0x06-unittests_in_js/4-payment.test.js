// 4-payment.test.js

// Import the necessary modules and libraries
const sinon = require('sinon');
const assert = require('assert');

// Import the sendPaymentRequestToApi function
const sendPaymentRequestToApi = require('./4-payment');

// Import the Utils module
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;

  beforeEach(() => {
    // Create a stub for the Utils.calculateNumber function
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the stub after each test
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Configure the stub to return a predefined value (if needed)
    const a = 100;
    const b = 20;
    calculateNumberStub.returns(a + b);

    // Call the sendPaymentRequestToApi function
    sendPaymentRequestToApi(a, b);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);

    // Assert other expectations if needed
    assert.strictEqual(calculateNumberStub.returned(120), true);
  });
});
