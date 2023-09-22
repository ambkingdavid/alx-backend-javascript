// api.js

const express = require('express');
const app = express();
const port = 7865;

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

module.exports = app;
