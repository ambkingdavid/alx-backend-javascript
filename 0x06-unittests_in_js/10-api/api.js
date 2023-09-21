const express = require('express');
const app = express();
const port = 7865;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Middleware to validate :id parameter as a number
app.param('id', (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    const error = new Error(`Cannot GET /cart/${id}`);
    error.status = 404;
    next(error); // Pass the error to the next middleware
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  // Check if the error has a status code; if not, default to 500
  const statusCode = err.status || 500;

  // Send an error response with the appropriate status code and message
  res.status(statusCode).send(err.message || 'Internal Server Error');
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

// Define a route for GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Define a route for POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

module.exports = app;