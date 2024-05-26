/**
 * Express Loader module.
 * @module expressLoader
 * @type {object}
 * @property {function} load - Loads the Express server.
 */
const expressLoader = require('./express.loader');

module.exports = ({ app }) => {
  expressLoader({ app });
};
