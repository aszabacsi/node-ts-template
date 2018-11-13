import * as express from 'express';
import * as gql from 'express-graphql';
import * as w from 'winston';
import schema from './graphql/schema';
import * as cors from 'cors';

class App {

  public app: express.Application;

  public constructor() {
    this.app = express();
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

  }

  public run(): void {
    this.app.listen(process.env.port || 8000, () => {
      w.info('Server is running...');
    });
  }

}

export default App;
