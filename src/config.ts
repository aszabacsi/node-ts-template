import * as dotenv from 'dotenv';

type Primitive = string | number | boolean;

const parse = (x?: string) => {
  if (!x) throw new TypeError('Argument is undefined!');
  if (x.match(/^-{0,1}\d+$/)) return parseInt(x, 10);
  if (x.match(/^\d+\.\d+$/)) return parseFloat(x);
  return x;
};

const invalidEnvVars = ((xs: {[key: string]: { type: string, value: Primitive }}) => {
  const invalids = Object.keys(xs).filter((key: string) => {
    const parsed = parse(process.env[key]);
    return xs[key].type !== typeof parsed;
  });
  return invalids;
});

const checkEnvVars = (envVars: {[key: string]: { type: string, value: Primitive }}) => {
  const invalids = invalidEnvVars({
    port: {
      type: 'number',
      value: 8080,
    },
    ...envVars,
  });

  if (invalids.length) {
    throw new Error('Invalid environment variables: ' + invalids);
  }
};

const devConfig = () => {
  dotenv.config();
  checkEnvVars({
    mode: {
      type: 'string',
      value: 'DEV',
    },
  });
};

const prodConfig = () => {
  checkEnvVars({
    mode: {
      type: 'string',
      value: 'PROD',
    },
  });
};

export default process.env.mode || process.env.Mode === 'PROD' ? prodConfig : devConfig;
