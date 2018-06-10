import * as express from 'express';
import * as gql from 'express-graphql';
import * as w from 'winston';
import schema from './graphql/schema';
import * as cors from 'cors';
import * as http from 'http';

class Gateway {

  public gateway: express.Application;
  public server: http.Server;

  public constructor() {
    this.gateway = express();
    this.server = http.createServer(this.gateway);
    this.configure();
    this.setRoutes();
  }

  public configure(): void {
    w.info('Configuring the Gatewaylication');
    this.gateway.use(cors());
  }

  public setRoutes(): void {

    this.gateway.use('/api', gql({
      schema,
      graphiql: true,
    }));

    this.gateway.use('/*', (req, res, next) => {
      res.status(404).send('404');
    });
  }

  public run(): void {
    this.gateway.listen(process.env.PORT || 8000, () => {
      w.info('Server is running...');
    });
  }

}

export default Gateway;
