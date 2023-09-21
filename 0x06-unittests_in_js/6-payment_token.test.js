// 6-payment_token.test.js

// Import the necessary modules and libraries
const assert = require('assert');

// Import the getPaymentTokenFromAPI function from 6-payment_token.js
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    // Call the getPaymentTokenFromAPI function with success = true
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Perform your assertions on the result here
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        // Call done to indicate that the test is complete
        done();
      })
      .catch((error) => {
        // If an error occurs, fail the test
        done(error);
      });
  });
});
