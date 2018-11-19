import * as express from 'express';
import * as gql from 'express-graphql';
import logger from './logger';
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
    logger.info('Configuring the Gateway Application');
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
      logger.info('Server is running...');
    });
  }
}

export default Gateway;
