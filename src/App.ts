import * as express from 'express';
import { buildSchema } from 'graphql';
import * as gql from 'express-graphql';
import * as w from 'winston';

class App {

  public app: express.Application;

  public constructor() {
    this.app = express();
    this.configure();
    this.setRoutes();
  }

  public clone(): App {
    return new App();
  }

  public configure(): void {
    w.info('Configuring the application');
  }

  public setRoutes(): void {
    const schema = buildSchema(`
      type Query {
        test: String
      }
    `);

    const root = {
      test: () => 'test',
    };

    this.app.use('/api', gql({
      schema,
      rootValue: root,
      graphiql: true,
    }));

  }

  public run(): void {
    this.app.listen(process.env.PORT || 8000, () => {
      w.info('Server is running...');
    });
  }

}

export default App;
