import * as express from 'express';
import { buildSchema } from 'graphql';
import * as gql from 'express-graphql';
import * as w from 'winston';
import schema from './graphql/schema';
import * as cors from 'cors';
import * as http from 'http';

class App {

  public app: express.Application;
  public server: http.Server;

  public constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.configure();
    this.setRoutes();
  }

  public configure(): void {
    w.info('Configuring the application');
    this.app.use(cors());
  }

  public setRoutes(): void {

    this.app.use('/api', gql({
      schema,
      graphiql: true,
    }));

    this.app.use('/*', (req, res, next) => {
      res.status(404).send('404');
    });
  }

  public run(): void {
    this.app.listen(process.env.PORT || 8000, () => {
      w.info('Server is running...');
    });
  }

}

export default App;
