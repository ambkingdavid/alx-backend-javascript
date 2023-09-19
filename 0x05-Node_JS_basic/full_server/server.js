const express = require('express');

const app = express();
const port = 1245;

// Get the command-line arguments including './database.csv'
const args = process.argv.slice(2);
const databaseFilePath = args[0];

// Set databaseFilePath in app.locals for global access
app.locals.databaseFilePath = databaseFilePath;

// Import the router from routes.js
const routes = require('./routes');

// Use the router as middleware
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
