const sinon = require('sinon');
const assert = require('assert');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberspy;

  beforeEach(() => {
    calculateNumberspy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberspy.restore()
  });

  it('should call Utils.calculateNumber with the correct argument', () => {
      sendPaymentRequestToApi(100, 20);

      sinon.assert.calledWithExactly(calculateNumberspy, 'SUM', 100, 20);

      assert.strictEqual(calculateNumberspy.returned(120), true);
  });
});
