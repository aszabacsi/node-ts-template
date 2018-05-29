import * as dotenv from 'dotenv';

const devConfig = () => {
  dotenv.config();
}

const prodConfig = () => {}

export default process.env.MODE ? devConfig : prodConfig;



