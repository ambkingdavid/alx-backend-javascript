const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the students url
app.get('/students', async (req, res) => {
  await countStudents('database.csv')
    .then((data) => {
      const resp = `This is the list of our students\n${data}`;
      res.send(resp);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server is running on port 1245');
});

module.exports = app;
