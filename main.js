const express = require('express');
const server = express();

const { appMysqlApiRest } = require("./rest/api_v0.0.1");
const { appPushNotification } = require("./push/push_v.0.0.1");

const { GLOBAL_MIDDELWARE } = require('./middelwares/middelware');

server.use( GLOBAL_MIDDELWARE );
//testing thread
const OS = require('os')
process.env.UV_THREADPOOL_SIZE = OS.cpus().length

console.log("--->thread testing-------> ",OS.cpus().length);


server.use('/api/v.0.0.1', appMysqlApiRest );

//service worker
//push notification

server.use('/push/v.0.0.1', appPushNotification );


server.listen(process.env.PORT || 3001);