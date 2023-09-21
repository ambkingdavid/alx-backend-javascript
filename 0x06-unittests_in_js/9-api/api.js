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
    const error = new Error();
    error.status = 404;
    next(error);
  } else {
    next();
  }
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
