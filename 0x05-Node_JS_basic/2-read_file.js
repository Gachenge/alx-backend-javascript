const fs = require('fs');

function countStudents(path) {
  let num = 0;
  const studentswe = [];
  const studentcs = [];

  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i].toString().split(',');
      if (line[3] === 'CS') {
        studentcs.push(line[0]);
      } else if (line[3] === 'SWE') {
        studentswe.push(line[0]);
      }
      num = i - 1;
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  console.log(`Number of students: ${num}`);
  console.log(`Number of students in CS: ${studentcs.length}. List: ${studentcs.join(', ')}`);
  console.log(`Number of students in SWE: ${studentswe.length}. List: ${studentswe.join(', ')}`);
}

module.exports = countStudents;
