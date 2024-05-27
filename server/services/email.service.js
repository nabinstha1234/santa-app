const nodemailer = require('nodemailer');
const logger = require('../utils/winstonLogger')('errorService');
const errorService = require('../services/error.service')();

const emailService = () => {
  const name = 'emailService';

  /**
   * Send email with error handling and Nodemailer integration
   */
  const sendMail = async (args = {}) => {
    const operation = 'sendMail';
    // Validate required arguments (improvements based on feedback)
    const requiredArgs = ['html']; // Required fields
    const missingArgs = requiredArgs.filter((arg) => !args[arg]);
    if (missingArgs.length > 0) {
      errorService.throwError({
        operation,
        name,
        err: `Missing required arguments: ${missingArgs.join(', ')}`,
      });
    }

    // Create a reusable transporter with secure configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Use environment variables for sensitive data
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      // Send email with clear content-type indication
      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'no-reply@yourdomain.com', // Set a default sender if not provided
        to: args.to || process.env.EMAIL_TO,
        subject: args.subject,
        text: args.text,
        html: args.html,
        contentType: 'text/html; charset=utf-8', // Explicitly set content type for HTML emails
      });
      logger.info({
        operation,
        message: `Email sent to ${process.env.EMAIL_TO}`,
      });
      return info; // Optionally return email info for further processing
    } catch (err) {
      errorService.throwError({
        err,
        operation,
        name,
        logError: true,
      });
    }
  };

  // Function for sending bulk emails with concurrency and error handling
  const sendBulkEmails = async (mails) => {
    try {
      const sendPromises = mails.map(sendMail);
      await Promise.all(sendPromises); // Wait for all emails to finish sending
      logger.info({
        operation: 'sendBulkEmails',
        message: 'All emails sent successfully',
      });
    } catch (error) {
      errorService.throwError({
        err: error,
        operation: 'sendBulkEmails',
        logError: true,
      });
    }
  };

  return {
    sendMail,
    sendBulkEmails,
  };
};

module.exports = emailService;
