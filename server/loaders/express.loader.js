const bodyParser = require('body-parser');

const routes = require('../routes');
const errorHandler = require('../middlewares/errorHandler');

module.exports = ({ app }) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.text({ type: 'text/plain' }));

  /**
   * GET request handler for the root route.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
  });

  app.use('/v1', routes);

  app.use((_, res) => {
    res.send({
      message: 'Route not found',
    });
  });

  app.use(errorHandler);
};
