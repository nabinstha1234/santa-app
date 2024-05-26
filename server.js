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
