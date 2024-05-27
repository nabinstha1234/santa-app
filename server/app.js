const express = require('express');
const path = require('path');
const loaders = require('./loaders');

/**
 * The logger object for logging messages.
 * @type {Object}
 */
const logger = require('./utils/winstonLogger')();

const app = express();

process.on('unhandledRejection', (reason, promise) => {
  logger.error({
    operation: 'unhandledRejection',
    message: reason,
    data: promise,
  });
});

app.use(express.static(path.join(__dirname, '../dist')));

loaders({ app });

module.exports = app;
