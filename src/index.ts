import * as cluster from 'cluster';
import * as http from 'http';
import * as os from 'os';
import * as w from 'winston';
import App from './App';
import config from './config';
config();

if (process.env.MODE === 'PROD' && cluster.isMaster) {

  const n = os.cpus().length;

  for (let i = 0; i < n; i = i + 1) {
    cluster.fork();
  }

  cluster.on('error', (worker, code, signal) => {
    w.error(`Worker died PID=${worker.process.pid} CODE=${code} SIGNAL=${signal}`);
  });

} else {

  const app = new App();

  app.run();

}
