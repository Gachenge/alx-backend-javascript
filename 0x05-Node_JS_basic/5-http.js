const http = require('http');
const fs = require('fs');

const port = 1245;

function countStudents(path) {
  let num = 0;
  const students = [];
  const student = [];
  let output = '';

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
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
        output += (`Number of students: ${num}\n`);
        output += (`Number of students in CS: ${students.length}. List: ${students}\n`);
        output += (`Number of students in SWE: ${student.length}. List: ${student}\n`);
      }
      resolve(output);
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list ofour students\n');
    countStudents(process.argv[2].toString()).then((out) => {
      response.end(out);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database\n');
    });
  }
});

app.listen(port, () => {

});
module.exports = app;