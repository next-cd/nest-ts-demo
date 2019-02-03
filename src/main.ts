
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const nconf = require('nconf')
// import dotenv from 'dotenv';

const dotenv = require('dotenv')
nconf.argv()
  .env();
const deployMode = nconf.get('foo');
const NODE_ENV = nconf.get('NODE_ENV');
// console.log('deployModedeployModedeployMode', deployMode);
console.log('testste', NODE_ENV);
import { resolve } from 'path';
console.log(resolve(__dirname + '/../.env.test'));
dotenv.config({
  path:  resolve(__dirname + '/../.env.test')
})
console.log(process.env.TEST);


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
