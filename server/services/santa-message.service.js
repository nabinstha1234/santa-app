const paging = require('../utils/paging');

const santaMessageRepository =
  require('../repository/santa-message.repository')();
const errorService = require('../services/error.service')();
const logger = require('../utils/winstonLogger')('userService');
const { NotImplementedError } = require('../utils/ApiError');

const santaMessageService = () => {
  const name = 'santaMessageService';

  /**
   * Get all message to the santa
   * @param {Object} args
   * @param {Object} args.query
   * @param {number} args.skip
   * @param {number} args.limit
   * @param {string} args.sort
   * @returns {Promise<{ paging: Object, results: Message[] }>}
   */
  const getAll = async (args = {}) => {
    const operation = 'getAll';
    const pagingArgs = paging.getPagingArgs(args);

    try {
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
      });
    } catch (err) {
      errorService.throwError({
        err,
        operation,
        name,
        logError: false,
      });
    }
  };

  /**
   * Get by id
   * @param {Object} args
   * @param {string} args._id
   * @returns {Promise<Message|null>}
   */
  const getById = async (args = {}) => {
    const operation = 'getById';
    try {
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
      });
    } catch (err) {
      errorService.throwError({
        err,
        operation,
        name,
        logError: false,
      });
    }
  };

  /**
   * Create
   * @param {Object} args
   * @param {string} args.userId
   * @param {string} args.message
   * @returns {Promise<Message>}
   */
  const create = async (args) => {
    const operation = 'create';
    try {
      const message = await santaMessageRepository.create({
        username: args.username,
        message: args.message,
        address: args.address,
      });

      return message;
    } catch (err) {
      errorService.throwError({
        err,
        operation,
        name,
        logError: false,
      });
    }
  };

  /**
   * Update
   * @param {Object} args
   * @param {string} args._id
   * @param {string} args.message
   * @returns {Promise<Message>}
   */
  const update = async (args = {}) => {
    const operation = 'update';
    try {
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
      });
    } catch (err) {
      errorService.throwError({
        err,
        operation,
        name,
        logError: false,
      });
    }
  };

  /**
   * Delete by id
   * @param {Object} args
   * @param {string} args._id
   * @returns {Promise<Message|null>}
   */
  const deleteById = async (args = {}) => {
    const operation = 'delete';
    try {
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
      });
    } catch (err) {
      errorService.throwError({
        err,
        operation,
        name,
        logError: false,
      });
    }
  };

  return {
    getAll,
    getById,
    create,
    update,
    deleteById,
  };
};

module.exports = santaMessageService;
