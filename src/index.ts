import config from './config';
config();
import * as cluster from 'cluster';
import * as os from 'os';

import Gateway from './Gateway';

import * as message from './message';

message.send('CREDENTIALS', {
  username: 'admin',
  password: 'password',
  salt: 'salt'
})
.then(res => {
  console.log('success', res);
})
.catch(err => {
  console.log('err', err);
});


if (process.env.MODE === 'PROD' && cluster.isMaster) {

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




