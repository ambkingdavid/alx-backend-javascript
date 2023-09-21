// 6-payment_token.js

function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // For simplicity, when success is false, we're not doing anything
      resolve(null);
    }
  });
}

module.exports = getPaymentTokenFromAPI;
