import * as dotenv from 'dotenv';
import winston from 'winston';

const devConfig = () => {
  process.stdout.write('Running in dev mode...');
  
  const result = dotenv.config();
  if(result.error) {
    process.stderr.write(JSON.stringify(result.error));
  } else {
    process.stdout.write('Parsed development environment variables.');
  }
};

const prodConfig = () => {
  process.stdout.write('Production');
};

export default process.env.PROD ? prodConfig : devConfig;
