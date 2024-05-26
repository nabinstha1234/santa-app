/**
 * This module exports an object that contains various string constants used in the server application.
 * Each constant represents a specific error message or success message.
 * These strings are used for validation errors, authentication messages, resource manipulation messages, etc.
 * The exported object provides a convenient way to access these messages throughout the application.
 *
 * @module config/strings
 * @type {Object}
 * @property {string} signupValidationError - Error message for user registration validation error.
 * @property {string} loginValidationError - Error message for login validation error.
 * @property {string} badCredentials - Error message for invalid login credentials.
 * @property {string} verifyEmailValidationError - Error message for email verification validation error.
 * @property {string} userNotFound - Error message for user not found.
 * @property {string} userIdRequired - Error message for missing user ID.
 * @property {string} tokenInvalid - Error message for invalid token.
 * @property {string} tokenRequired - Error message for missing token.
 * @property {string} tokenValidation - Error message for token validation error.
 * @property {string} userExists - Error message for user already exists.
 * @property {string} emailRequired - Error message for missing email.
 * @property {string} resetPasswordValidationError - Error message for reset password validation error.
 * @property {string} userNotAuthorized - Error message for unauthorized user.
 * @property {string} firstNameValidation - Error message for missing first name.
 * @property {string} lastNameValidation - Error message for missing last name.
 * @property {string} passwordValidation - Error message for missing password.
 * @property {string} userNotAuthenticated - Error message for unauthenticated user.
 * @property {string} notImplemented - Error message for not implemented functionality.
 * @property {string} resourceConflict - Error message for resource conflict.
 * @property {string} internalServerError - Error message for internal server error.
 * @property {string} validationError - Error message for general validation error.
 * @property {string} emailVerifiedInputValidation - Error message for email verification input validation error.
 * @property {string} idRequired - Error message for missing ID.
 * @property {string} forbidden - Error message for forbidden access.
 * @property {string} resourceNotFound - Error message for resource not found.
 * @property {string} invalidEmail - Error message for invalid email.
 * @property {string} registerSuccess - Success message for successful user registration.
 * @property {string} loginSuccess - Success message for successful user login.
 * @property {string} verifyEmailSuccess - Success message for successful email verification.
 * @property {string} forgotPasswordSuccess - Success message for successful password reset request.
 * @property {string} resetPasswordSuccess - Success message for successful password reset.
 * @property {string} resendEmailVerificationSuccess - Success message for successful email verification resend.
 * @property {string} logoutSuccess - Success message for successful user logout.
 * @property {string} userListedSuccess - Success message for successful user listing.
 * @property {string} userUpdateSuccess - Success message for successful user update.
 * @property {string} userCreateSuccess - Success message for successful user creation.
 * @property {string} userDeleteSuccess - Success message for successful user deletion.
 * @property {string} cannotDeleteOwnAccount - Error message for user attempting to delete their own account.
 * @property {string} roleValidation - Error message for missing or invalid role.
 * @property {string} passwordNotMatch - Error message for password mismatch.
 * @property {string} changePasswordSuccessful - Success message for successful password change.
 */
module.exports = {
  signupValidationError: 'Error registering user',
  loginValidationError: 'Error logging in',
  badCredentials: 'Bad credentials',
  verifyEmailValidationError: 'Email verification failed',
  userNotFound: 'User not found',
  userIdRequired: 'User ID required',
  tokenInvalid: 'Token invalid',
  tokenRequired: 'Token is required',
  tokenValidation: 'Token invalid',
  userExists: 'User already exists',
  emailRequired: 'Email should be non empty string',
  resetPasswordValidationError: 'Reset password validation error',
  userNotAuthorized: 'User is not authorized to perform the action',
  firstNameValidation: 'First name should be non empty string',
  lastNameValidation: 'Last name should be non empty string',
  passwordValidation: 'Password should be non empty string',
  userNotAuthenticated: 'User is not authenticated',
  notImplemented: 'Not implemented',
  resourceConflict: 'Resource conflict',
  internalServerError: 'Internal server error',
  validationError: 'Validation error',
  emailVerifiedInputValidation: 'Email verification input validation error',
  idRequired: 'ID is requried',
  forbidden: 'Forbidden',
  resourceNotFound: 'Resource not found',
  invalidEmail: 'Email is invalid',
  registerSuccess: 'Registered successfully',
  loginSuccess: 'Logged in successfully',
  verifyEmailSuccess: 'Email verified. You can now login',
  forgotPasswordSuccess: 'Please check your email to reset your password',
  resetPasswordSuccess: 'Reset password successfully',
  resendEmailVerificationSuccess: 'Email has been sent.',
  logoutSuccess: 'Logout successfull',
  userListedSuccess: 'User listed',
  userUpdateSuccess: 'User updated',
  userCreateSuccess: 'User created',
  userDeleteSuccess: 'User deleted',
  cannotDeleteOwnAccount: 'User cannot delete own account',
  roleValidation: 'Role must be non empty string',
  passwordNotMatch: 'Password does not match.',
  changePasswordSuccessful: 'Password changed.',
};
