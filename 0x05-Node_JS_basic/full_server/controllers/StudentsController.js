#!/usr/bin/node

const readDatabase = require('../utils');

function sortFieldsKeys(fields) {
  // returns a list of sorted keys of an object
  const keys = Object.keys(fields).map((field) => field.toLowerCase());
  return keys.sort();
}

class StudentsController {
  static getAllStudents(request, response) {
    const { databaseFilePath } = request.app.locals;
    readDatabase(databaseFilePath)
      .then((data) => {
        const keys = sortFieldsKeys(data.fields);
        let resp = 'This is the list of our students\n';
        for (const key of keys) {
          const k = key.toUpperCase();
          resp += `Number of students in ${k}: ${data.fields[k].count}. `;
          resp += `List: ${data.fields[k].list.join(', ')}\n`;
        }
        response.status(200).send(resp.trim());
      })
      .catch((error) => {
        response.status(500).send(`${error}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major === 'CS' || major === 'SWE') {
      const { databaseFilePath } = request.app.locals;
      readDatabase(databaseFilePath)
        .then((data) => {
          const studentsList = data.fields[major].list.join(', ');
          const resp = `List: ${studentsList}`;
          response.status(200).send(resp);
        })
        .catch((error) => {
          response.status(500).send(`${error}`);
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
