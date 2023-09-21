/**
 * Get a payment token from the API.
 *
 * @param {boolean} success - Indicates whether the API request should succeed (true) or fail (false).
 * @returns {Promise} A Promise that resolves with the API response or null.
 */
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
