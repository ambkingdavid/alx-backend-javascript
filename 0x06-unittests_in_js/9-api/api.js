// api.js

const express = require('express');
const app = express();
const port = 7865;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Middleware to validate :id parameter as a number
app.param('id', (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    const error = new Error(`Cannot GET /cart/${id}`);
    error.status = 404;
    next(error.message);
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  // Check if the error has a status code; if not, default to 500
  const statusCode = err.status;

  // Send an error response with the appropriate status code and message
  res.status(statusCode).send(err.message);
});

// Define a route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define a route for GET /cart/:id
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

module.exports = app;
