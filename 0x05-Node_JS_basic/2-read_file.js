const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');
    const fields = {}
    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    for (let i = 1; i < lines.length; i++) {
      const studentData = lines[i].split(',');
      if (studentData.length === 4) {
        const field = studentData[studentData.length - 1];
        const firstName = studentData[0];
        if (!fields[field]) {
          fields[field] = {
            count: 1,
            list: [firstName]
          };
        } else {
          fields[field].count++;
          fields[field].list.push(firstName);
        }
      }
    }
    for (f in fields) {
      console.log(`Number of students in ${f}: ${fields[f].count}.` +
                    ` List: ${fields[f].list}`);
    }

  } catch (error) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
