import * as cluster from 'cluster';
import * as http from 'http';
import * as os from 'os';

if(cluster.isMaster) {

  const n = os.cpus().length;

  for(let i = 0; i < n; ++i) {
    cluster.fork();
  }

  cluster.on('error', (worker, code, signal) => {
    console.log(
      `Worker died PID=${worker.process.pid} CODE=${code} SIGNAL=${signal}`
    );
  });

} else {

  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.write('Success');
    res.end();
  });
  
  server.listen(process.env.PORT || 8000);

}

