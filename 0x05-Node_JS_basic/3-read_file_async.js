const fs = require('fs');

function countStudents(path) {
  let num = 0;
  const studentcs = [];
  const studentswe = [];

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
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
        console.log(`Number of students: ${num}`);
        console.log(`Number of students in CS: ${studentcs.length}. List: ${studentcs.join(', ')}`);
        console.log(`Number of students in SWE: ${studentswe.length}. List: ${studentswe.join(', ')}`);
      }
      resolve(data);
    });
  });
}

module.exports = countStudents;
