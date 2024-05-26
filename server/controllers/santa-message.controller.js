const vars = require('../config/vars');
const strings = require('../config/strings');
const santaMessageValidation = require('../validation/santa-message.validation');
const santaMessageService = require('../services/santa-message.service')();
const errorService = require('../services/error.service')();
const joiService = require('../services/joi.service')();

const santaMessageController = () => {
  const name = 'santaMessageController';

  const getSantaMessages = async (req, res, next) => {
    const operation = 'getSantaMessages';

    try {
      let result = await santaMessageService.getAll(req.query || {});

      return res.status(200).send({
        message: strings.santaMessageListedSuccess,
        data: result,
      });
    } catch (err) {
      const error = errorService.getError({
        err,
        name,
        operation,
        logError: true,
      });
      next(error);
    }
  };

  const getSantaMessage = async (req, res, next) => {
    const operation = 'getSantaMessage';

    try {
      const _id = req.params._id;

      let message = await santaMessageService.getById({ _id });
      if (!message) {
        return res.status(404).send({
          message: strings.santaMessageNotFound,
          data: {},
        });
      }

      return res.status(200).send({
        message: strings.santaMessageListedSuccess,
        data: message,
      });
    } catch (err) {
      const error = errorService.getError({
        err,
        name,
        operation,
        logError: true,
      });
      next(error);
    }
  };

  const createSantaMessage = async (req, res, next) => {
    const operation = 'createSantaMessage';

    try {
      const args = req.body;
      const message = args?.message;
      const userId = args?.userId;

      const schema = santaMessageValidation.create;
      await joiService.validate({
        schema,
        input: {
          message,
          userId,
        },
      });

      let createdMessage = await santaMessageService.create({
        userId,
        message,
      });

      return res.status(200).send({
        message: strings.santaMessageCreateSuccess,
        data: createdMessage,
      });
    } catch (err) {
      const error = errorService.getError({
        err,
        name,
        operation,
        logError: true,
      });
      next(error);
    }
  };

  const updateSantaMessage = async (req, res, next) => {
    const operation = 'updateSantaMessage';

    try {
      const _id = req.params._id;
      const args = req.body;

      const message = args?.message;
      const schema = santaMessageValidation.update;
      await joiService.validate({
        schema,
        input: {
          message,
        },
      });

      let updateMessage = await santaMessageService.update({
        _id,
        message,
      });

      return res.status(200).send({
        message: strings.santaMessageUpdateSuccess,
        data: updateMessage,
      });
    } catch (err) {
      const error = errorService.getError({
        err,
        name,
        operation,
        logError: true,
      });
      next(error);
    }
  };

  const deleteSantaMessage = async (req, res, next) => {
    const operation = 'deleteSantaMessage';

    try {
      const _id = req.params._id;

      const user = await santaMessageService.deleteById({ _id });
      if (!user) {
        return res.status(404).send({
          message: strings.userNotFound,
          data: null,
        });
      }

      return res.status(200).send({
        message: strings.userDeleteSuccess,
        data: user,
      });
    } catch (err) {
      const error = errorService.getError({
        err,
        name,
        operation,
        logError: true,
      });
      next(error);
    }
  };

  return {
    getSantaMessages,
    getSantaMessage,
    createSantaMessage,
    updateSantaMessage,
    deleteSantaMessage,
  };
};

module.exports = santaMessageController;
