#!/usr/bin/node

// Read a file synchronously with Node.js

const fs = require('fs');

function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    if (!databasePath) {
      reject(new Error('Cannot load the database'));
      return; // Stop execution here
    }
    fs.readFile(databasePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error(('Cannot load the database')));
      } else {
        const lines = data.split('\n');
        const fields = {};
        let totalStudents = 0;

        for (let i = 1; i < lines.length; i += 1) {
          const studentData = lines[i].split(',');
          if (studentData && studentData.length === 4) {
            const field = studentData[studentData.length - 1];
            const firstName = studentData[0];
            if (!fields[field]) {
              fields[field] = {
                count: 1,
                list: [firstName],
              };
              totalStudents += 1;
            } else {
              fields[field].count += 1;
              fields[field].list.push(firstName);
              totalStudents += 1;
            }
          }
        }
        console.log(`Number of students: ${totalStudents}`);

        const keys = Object.keys(fields);

        for (const f of keys) {
          console.log(`Number of students in ${f}: ${fields[f].count}.`
            + ` List: ${fields[f].list.join(', ')}`);
        }
        resolve({ fields, totalStudents });
      }
    });
  });
}

module.exports = countStudents;
