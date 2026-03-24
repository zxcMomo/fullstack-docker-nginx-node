const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>HOME from Docker Node</h1>');
  } else if (req.url === '/about') {
    res.end('<h1>ABOUT from Docker Node</h1>');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, '0.0.0.0');
