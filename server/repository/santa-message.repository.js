const { isString, isNil } = require('lodash');

const strings = require('../config/strings');
const {
  ValidationError,
  NotFoundError,
  NotImplementedError,
} = require('../utils/ApiError');
const errorService = require('../services/error.service')();

const pendingRequestStore = require('../store');

const santaMessageRepository = () => {
  const name = 'santaMessageRepository';

  /**
   * Create new message
   * @param {Object} args
   * @param {string=} args.username
   * @param {string=} args.message
   * @param {string=} args.address
   * @returns {Promise<Message>}
   */
  const create = async (args) => {
    const operation = 'create';
    try {
      const username = args?.username;
      const message = args?.message;
      const address = args?.address;

      const errors = [];
      if (isNil(username) || !isString(username)) {
        errors.push(strings.messageSenderUserId);
      }

      if (isNil(message) || !isString(message)) {
        errors.push(strings.messageToSanta);
      }

      if (errors.length) {
        throw new ValidationError({
          message: strings.validationError,
          details: errors,
        });
      }

      pendingRequestStore.addRequest({
        username,
        message,
        address,
      });
      return {
        username,
        message,
        address,
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

  return {
    create,
  };
};

module.exports = santaMessageRepository;
