/**
 * Express Loader module.
 * @module expressLoader
 * @type {object}
 * @property {function} load - Loads the Express server.
 */
const expressLoader = require('./express.loader');
const corsLoader = require('./cors.loader');

module.exports = ({ app }) => {
  corsLoader({ app });
  expressLoader({ app });
};
