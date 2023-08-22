const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  let num = 0;
  const studentcs = [];
  const studentswe = [];
  let output = '';

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(error);
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
        output += (`Number of students: ${num}\n`);
        output += (`Number of students in CS: ${studentcs.length}. List: ${studentcs.join(', ')}\n`);
        output += (`Number of students in SWE: ${studentswe.length}. List: ${studentswe.join(', ')}\n`);
      }
      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((out) => {
    res.send(`This is the list of our students\n${out}`);
  }).catch(() => {
    res.send('Cannot load the database');
  });
});

app.listen(port);

module.exports = app;
