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
      const databasePath = process.argv[2]; // Specify the path to your database file
      countStudents(databasePath)
        .then((data) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          let resp = 'This is the list of our students\n';
          resp = resp.concat(`Number of students: ${data.totalStudents}\n`);
          const keys = Object.keys(data.fields);
          for (const field of keys) {
            resp = resp.concat(`Number of students in ${field}: ${data.fields[field].count}. `);
            resp = resp.concat(`List: ${data.fields[field].list.join(', ')}\n`);
          }
          res.end(resp.trim());
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`${error}`);
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
