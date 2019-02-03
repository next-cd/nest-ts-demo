const nconf = require('nconf')
// import dotenv from 'dotenv';

const dotenv = require('dotenv')
// require('dotenv').config({
//   path: __dirname + './.env.test'
// });
  nconf.argv()
    .env()
    const deployMode = nconf.get('foo');
    const NODE_ENV = nconf.get('NODE_ENV');
    console.log('deployModedeployModedeployMode', deployMode);
    console.log('testste', NODE_ENV);
    // console.log(__dirname + '/.env.test');
    
    dotenv.config({
        path: __dirname + '/.env.test'
    })
    console.log(process.env.TEST);
    