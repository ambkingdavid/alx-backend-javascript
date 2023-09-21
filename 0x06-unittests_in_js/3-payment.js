// 3-payment.js

// Import the Utils module
const Utils = require('./utils');

// Create a new function named sendPaymentRequestToApi
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Call the Utils.calculateNumber function with type SUM
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  
  // Display the result in the console
  console.log(`The total is: ${result}`);
}

// Export the sendPaymentRequestToApi function
module.exports = sendPaymentRequestToApi;
