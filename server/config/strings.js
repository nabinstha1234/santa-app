/**
 * This module exports an object that contains various string constants used in the server application.
 * Each constant represents a specific error message or success message.
 * These strings are used for validation errors, authentication messages, resource manipulation messages, etc.
 * The exported object provides a convenient way to access these messages throughout the application.
 *
 * @module config/strings
 * @type {Object}
 * @property {string} validationError - Error message for validation errors.
 * @property {string} messageSenderUserId - Error message for missing sender user ID.
 * @property {string} messageToSanta - Error message for missing message to Santa.
 * @property {string} santaMessageListedSuccess - Success message for successful Santa message listing.
 * @property {string} santaMessageUpdateSuccess - Success message for successful Santa message update.
 * @property {string} santaMessageCreateSuccess - Success message for successful Santa message creation.
 * @property {string} santaMessageDeleteSuccess - Success message for successful Santa message deletion.
 */
module.exports = {
  validationError: 'Validation error',
  messageSenderUserId: 'Sender username should be non empty string',
  messageToSanta: 'Message to Santa should be non empty string',
  santaMessageListedSuccess: 'User listed',
  santaMessageUpdateSuccess: 'User updated',
  santaMessageCreateSuccess: 'User created',
  santaMessageDeleteSuccess: 'User deleted',
  santaMessageNotFound: 'Santa message not found',
};
