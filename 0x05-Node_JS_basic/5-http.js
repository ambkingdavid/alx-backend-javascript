const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      // Handle the root URL path
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      // Handle the /students URL path
      const databasePath = 'database.csv'; // Specify the path to your database file
      countStudents(databasePath)
        .then((data) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`Error: ${error.message}\n`);
        });
    } else {
      // Handle other URL paths
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found\n');
    }
  } else {
    // Handle non-GET requests
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed\n');
  }
});

app.listen(1245);

module.exports = app;