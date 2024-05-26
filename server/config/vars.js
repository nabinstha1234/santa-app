/**
 * Loads environment variables from a .env file.
 * @module dotenv
 */
require('dotenv').config();

const originsEnv = process.env.ORIGINS;
const origins = originsEnv ? originsEnv.split(',') : ['*'];

module.exports = {
  origins,
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'SantaApp',
  log: {
    fileLogLevel: process.env.FILE_LOG_LEVEL,
    dirname: process.env.LOG_DIRNAME,
    errorLogFilename: process.env.ERROR_LOG_FILENAME || 'error',
    logLevels: {
      error: 'error',
      warn: 'warn',
      info: 'info',
      verbose: 'verbose',
      debug: 'debug',
      silly: 'silly',
    },
  },
};
