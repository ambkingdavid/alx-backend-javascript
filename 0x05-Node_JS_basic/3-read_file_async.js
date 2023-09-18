#!/usr/bin/node

// Read a file synchronously with Node.js

const fs = require("fs");

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.split('\n');
        const validStudents = lines.slice(1)
          .filter((line) => line.trim() !== '')
          .map((line) => line.split(','));
        const studentList = validStudents.map((student) => student[0]);
        const totalStudents = studentList.length;

        // Group students by field
        const fields = {};
        validStudents.forEach((student) => {
          const field = student[student.length - 1];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        });

        const results = [];
        for (const field in fields) {
          const fieldStudents = fields[field].join(', ');
          results.push(`Number of students in ${field}: ${fields[field].length}. List: ${fieldStudents}`);
        }

        const response = `Number of students: ${totalStudents}\n${results.join('\n')}`;
        console.log(response)
        resolve(response);
      }
    });
  });
}

module.exports = countStudents;
