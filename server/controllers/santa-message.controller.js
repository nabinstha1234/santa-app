const strings = require('../config/strings');
const santaMessageValidation = require('../validation/santa-message.validation');
const santaMessageService = require('../services/santa-message.service')();
const errorService = require('../services/error.service')();
const joiService = require('../services/joi.service')();
const emailService = require('../services/email.service')();
const userService = require('../utils/fetchUserData');
const { NotImplementedError } = require('../utils/ApiError');
const logger = require('../utils/winstonLogger');

const santaMessageController = () => {
  const name = 'santaMessageController';

  const getSantaMessages = async (req, res, next) => {
    const operation = 'getSantaMessages';

    try {
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
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
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
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
      const username = args?.username;

      const schema = santaMessageValidation.create;
      await joiService.validate({
        schema,
        input: {
          message,
          username,
        },
      });
      const userData = await userService.getUser(args.username);

      if (!userData) {
        return res.status(404).send({
          message: 'User not found.',
          data: {},
        });
      }

      if (!userData.age) {
        return res.status(400).send({
          message: 'User age is not registered. ',
          data: {},
        });
      }

      if (userData.age > 10) {
        return res.status(400).send({
          message: 'User is too old to send a message to Santa.',
          data: {},
        });
      }
      let createdMessage = await santaMessageService.create({
        username,
        message,
        address: userData.address,
      });

      await emailService.sendMail({
        html: `
         <!DOCTYPE html>
         <html lang="en">
         <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Santa Message</title>
         </head>
         <body>
           <h1>Ho ho ho!</h1>
           <p>Greetings, ${username},</p>
           <p>${message}</p>
           <p>We're sending this message from address at:</p>
           <p>${userData.address}</p>
           <p>Wishing you a Merry Christmas and a Happy New Year!</p>
           <p>Sincerely,</p>
           <p>Santa Claus</p>
         </body>
         </html>
         `,
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
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
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
      throw NotImplementedError({
        message: 'this service is  not implemented',
        details: null,
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
