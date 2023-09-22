const express = require('express');
const app = express();
const port = 7865;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Define a route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define a route for GET /cart/:id
app.get('/cart/:id([0-9]*)', (req, res) => {
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