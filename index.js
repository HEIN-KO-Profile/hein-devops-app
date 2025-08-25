const http = require('http');
const port = 8082;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hein Ko, you are brilliant. You are about to be what you would like to be. Congratulations!");
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
