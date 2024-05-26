const { isString, isNil } = require('lodash');

const strings = require('../config/strings');
const { ValidationError, NotFoundError } = require('../utils/ApiError');
const errorService = require('../services/error.service')();

const santaMessageRepository = () => {
  const name = 'santaMessageRepository';

  /**
   * Get all documents
   * @param {Object} args
   * @param {Object} args.query
   * @param {number} args.skip
   * @param {number} args.limit
   * @param {string} args.sort
   * @returns {Promise<{ count: number, rows: Message[] }>}
   */
  const getAllAndCount = async (args = {}) => {
    const operation = 'getAllAndCount';

    // const { skip, limit, sort, query } = args;

    try {
      const total = 100;
      const data = [
        {
          _id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'nabin',
        },
      ];

      return {
        count: total,
        rows: data,
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
   * Get message by id
   * @param {Object} args
   * @param {number} args._id
   * @returns {Promise<Message|null>}
   */
  const getById = async (args = {}) => {
    const operation = 'getById';

    const _id = args?._id;

    try {
      const errors = [];
      if (isNil(_id) || !isString(_id)) {
        errors.push(strings.messageSenderUserId);
      }

      if (errors.length) {
        throw new ValidationError({
          message: strings.validationError,
          details: errors,
        });
      }

      const data = {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'nabin',
      };
      return data;
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
   * Get all documents
   * @param {any} args
   * @returns {Promise<Message[]>}
   */
  const getAll = async (args) => {
    const operation = 'getAll';

    try {
      const data = [
        {
          _id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'nabin',
        },
      ];
      return data;
    } catch (error) {
      errorService.throwError({
        err,
        operation,
        name,
        logError: false,
      });
    }
  };

  /**
   * Create new message
   * @param {Object} args
   * @param {string=} args.userId
   * @param {string=} args.message
   * @returns {Promise<Message>}
   */
  const create = async (message) => {
    const operation = 'create';
    try {
      const userId = message?.userId;
      const message = message?.message;

      const errors = [];
      if (isNil(userId) || !isString(userId)) {
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

      const data = {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'nabin',
      };
      return data;
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
   * Update message
   * @param {Object} args
   * @param {string=} args.userId
   * @param {string=} args.message
   * @returns {Promise<Message|null>}
   */
  const update = async (args) => {
    const operation = 'update';
    try {
      const _id = args?.userId;
      const message = args?.message;
      const errors = [];
      if (isNil(_id) || !isString(_id)) {
        errors.push(strings.messageSenderUserId);
      }

      if (!isNil(message) && !isString(message)) {
        errors.push(strings.messageToSanta);
      }

      if (errors.length) {
        throw new ValidationError({
          message: strings.validationError,
          details: errors,
        });
      }

      const foundMessage = true;

      if (!foundMessage) {
        throw new NotFoundError({
          message: strings.santaMessageNotFound,
          details: [strings.santaMessageNotFound],
          data: { _id },
        });
      }

      let data = {};

      return data;
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
   * Delete message
   * @param {Object} args
   * @param {string} args._id
   * @returns {Promise<Message|null>}
   */
  const deleteById = async (args = {}) => {
    const operation = 'deleteById';
    try {
      const uid = args?._id;

      const errors = [];

      if (isNil(uid) || !isString(uid)) {
        errors.push(strings.messageSenderUserId);
      }

      if (errors.length) {
        throw new ValidationError({
          message: strings.validationError,
          details: errors,
        });
      }

      return {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'nabin',
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
    getAllAndCount,
    getById,
    getAll,
    create,
    update,
    deleteById,
  };
};

module.exports = santaMessageRepository;
