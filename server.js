// // server.js
// // where your node app starts

// // init project
// const express = require('express');
// const morgan = require('morgan');
// const axios = require('axios');
// const nodemailer = require('nodemailer');
// const schedule = require('node-schedule');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware setup
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(morgan('dev'));
// // http://expressjs.com/en/starter/static-files.html
// app.use(express.static('dist'));

// // Global variables
// const PENDING_REQUESTS = [];

// // http://expressjs.com/en/starter/basic-routing.html
// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/dist/index.html');
// });

// // listen for requests :)
// const listener = app.listen(process.env.PORT || 3000, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

const app = require('./server/app');
const vars = require('./server/config/vars');
/**
 * Logger instance for server.js.
 * @type {Object}
 */
const logger = require('./server/utils/winstonLogger')('server');

app.listen(vars.port, () => {
  logger.info({
    operation: 'serverConnection',
    message: `App is listening to port ${vars.port}`,
  });
});
