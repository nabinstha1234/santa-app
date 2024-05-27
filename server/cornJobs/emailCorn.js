const cron = require('node-cron');
const pendingRequestStore = require('../store');
const emailService = require('../services/email.service')();

const logger = require('../utils/winstonLogger')('errorService');

/* This code snippet is using the `node-cron` library to schedule a task to run every 15 minutes. When
the scheduled time is reached, the function inside the `async` arrow function will be executed. */
const emailCorn = cron.schedule('*/1 * * * *', async () => {
  try {
    const pendingRequests = pendingRequestStore.getPendingRequests();
    if (!pendingRequests.length) {
      return;
    }
    const mailData = pendingRequests.map((data) => {
      return {
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
          <p>Greetings, ${data.username},</p>
          <p>${data.message}</p>
          <p>We're sending this message from address at:</p>
          <p>${data.address}</p>
          <p>Wishing you a Merry Christmas and a Happy New Year!</p>
          <p>Sincerely,</p>
          <p>Santa Claus</p>
        </body>
        </html>
        `,
      };
    });
    await emailService.sendBulkEmails(mailData);
  } catch (error) {
    logger.error({
      operation: 'emailCorn',
      message: 'Error sending bulk emails',
      data: error,
    });
  }
});

module.exports = {
  emailCorn,
};
