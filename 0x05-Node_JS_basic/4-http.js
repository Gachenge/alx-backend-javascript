const http = require('http');

const port = 1245;

const app = http.createServer((request, response) => {
  response.write('Hello Holberton School!');
  response.end();
}).listen(port);

module.exports = app;
