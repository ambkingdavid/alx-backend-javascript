const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');
    const fields = {}
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) {
      const studentData = lines[i].split(',');
      if (studentData && studentData.length === 4) {
        const field = studentData[studentData.length - 1];
        const firstName = studentData[0];
        if (!fields[field]) {
          fields[field] = {
            count: 1,
            list: [firstName]
          };
          totalStudents++;
        } else {
          fields[field].count++;
          fields[field].list.push(firstName);
          totalStudents++;
        }
      }
    }
    console.log(`Number of students: ${totalStudents}`);
    for (f in fields) {
      console.log(`Number of students in ${f}: ${fields[f].count}.` +
                    ` List: ${fields[f].list.join(', ')}`);
    }

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
