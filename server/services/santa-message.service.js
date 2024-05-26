const paging = require('../utils/paging');

const santaMessageRepository =
  require('../repository/santa-message.repository')();
const errorService = require('../services/error.service')();
const logger = require('../utils/winstonLogger')('userService');

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
      let { rows, count } =
        await santaMessageRepository.getAllAndCount(pagingArgs);

      const pagingMeta = paging.getPagingResult(pagingArgs, { total: count });

      logger.info({
        operation,
        message: 'Get all Message to santa',
        data: args,
      });

      return {
        paging: pagingMeta,
        results: rows,
      };
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
      const _id = args?._id;
      let message = await santaMessageRepository.getById({ _id });
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
   * Create
   * @param {Object} args
   * @param {string} args.userId
   * @param {string} args.message
   * @returns {Promise<Message>}
   */
  const create = async (args) => {
    const operation = 'create';

    try {
      const user = await santaMessageRepository.create({
        userId: args.userId,
        message: args.message,
      });

      return user;
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
    const _id = args?._id;
    const message = args?.message;

    try {
      let updated = await santaMessageRepository.update({
        _id,
        message,
      });

      return updated;
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
      const _id = args?._id;

      let deletedUser = await santaMessageRepository.deleteById({ _id });

      return deletedUser;
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
