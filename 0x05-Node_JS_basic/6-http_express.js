const express = require('express');
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server is running on port 1245');
});

module.exports = app;
