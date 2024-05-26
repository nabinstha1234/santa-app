const Joi = require('joi');

const strings = require('../config/strings');

const messages = {
  userId: {
    'string.base': strings.messageSenderUserId,
    'string.empty': strings.messageSenderUserId,
    'string.required': strings.messageSenderUserId,
    'any.required': strings.messageSenderUserId,
  },
  messages: {
    'string.base': strings.messageToSanta,
    'string.empty': strings.messageToSanta,
    'string.required': strings.messageToSanta,
    'any.required': strings.messageToSanta,
  },
};

const create = Joi.object({
  userId: Joi.string().required().messages(messages.userId),
  message: Joi.string().required().messages(messages.messages),
});

const update = Joi.object({
  messages: Joi.string().required().messages(messages.messages),
});

module.exports = {
  create,
  update,
};
