const express = require('express');

const app = express();
const port = 1245;

// Import the router from routes.js
const routes = require('./routes');

// Use the router as middleware
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
