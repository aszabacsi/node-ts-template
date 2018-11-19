import * as cluster from 'cluster';
import * as os from 'os';
import config from './config';
config();
import Gateway from './Gateway';

if (process.env.mode === 'PROD' && cluster.isMaster) {

  const n = os.cpus().length;

  for (let i = 0; i < n; i = i + 1) {
    cluster.fork();
  }

  cluster.on('error', (worker, code, signal) => {
    process.stderr.write(`Worker died PID=${worker.process.pid} CODE=${code} SIGNAL=${signal}`);
  });

} else {

  const gateway = new Gateway();

  gateway.run();

}




