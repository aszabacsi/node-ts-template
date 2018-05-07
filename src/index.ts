import * as cluster from 'cluster';
import * as http from 'http';
import * as os from 'os';
import * as w from 'winston';
import * as express from 'express';
import { buildSchema } from 'graphql';
import * as gql from 'express-graphql';

if (cluster.isMaster) {

  const n = os.cpus().length;

  for (let i = 0; i < n; i = i + 1) {
    cluster.fork();
  }

  cluster.on('error', (worker, code, signal) => {
    w.error(`Worker died PID=${worker.process.pid} CODE=${code} SIGNAL=${signal}`);
  });

} else {

  const schema = buildSchema(`
    type Query {
      test: String
    }
  `);

  const root = {
    test: () => 'test',
  };

  const app = express();

  app.use('/api', gql({
    schema,
    rootValue: root,
    graphiql: true,
  }));

  app.listen(process.env.PORT || 8000, () => {
    w.info('Server is running...');
  });

}
