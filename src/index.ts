import * as http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('Success');
  res.end();
});

server.listen(process.env.PORT || 8000);