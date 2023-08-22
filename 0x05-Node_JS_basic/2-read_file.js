const fs = require('fs');

function countStudents(path) {
  let num = 0;
  const students = [];
  const student = [];

  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i].toString().split(',');
      if (line[3] === 'CS') {
        students.push(line[0]);
      } else if (line[3] === 'SWE') {
        student.push(line[0]);
      }
      num = i - 1;
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
  console.log(`Number of students: ${num}`);
  console.log(`Number of students in CS: ${students.length}. List: ${students}`);
  console.log(`Number of students in SWE: ${student.length}. List: ${student}`);
}

module.exports = countStudents;
