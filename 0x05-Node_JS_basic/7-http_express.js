const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the students url
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  await countStudents(databasePath)
    .then((data) => {
      let resp = 'This is the list of our students\n';
      resp = resp.concat(`Number of students: ${data.totalStudents}\n`);
      const keys = Object.keys(data.fields);
      for (const field of keys) {
        resp = resp.concat(`Number of students in ${field}: ${data.fields[field].count}. `);
        resp = resp.concat(`List: ${data.fields[field].list.join(', ')}\n`);
      }
      res.send(resp.trim());
    })
    .catch((error) => {
      res.send(`${error}`);
    });
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server is running on port 1245');
});

module.exports = app;
