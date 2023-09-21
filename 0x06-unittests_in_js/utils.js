// utils.js

// Import Sinon for creating spies
const sinon = require('sinon');

// Define your utility module
const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM')
      return Math.round(a) + Math.round(b);
    if (type === 'SUBTRACT')
      return Math.round(a) - Math.round(b);
    if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
    return null;
  }
};

// Export the Utils module
module.exports = Utils;
