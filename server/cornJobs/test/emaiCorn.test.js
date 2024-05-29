jest.mock('../../store');
jest.mock('../../services/email.service');

const { emailCorn } = require('../emailCorn');
const pendingRequestStore = require('../../store');
const emailService = require('../../services/email.service');

describe('emailCorn function', () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('sends emails for pending requests', async () => {
    const mockPendingRequests = [
      {
        username: 'John',
        message: 'Merry Christmas!',
        address: 'example@mail.com',
      },
      {
        username: 'Jane',
        message: 'Happy Holidays!',
        address: 'jane.doe@mail.com',
      },
    ];
    pendingRequestStore.getPendingRequests.mockReturnValue(mockPendingRequests);
    const mockSendBulkEmails = jest.fn().mockResolvedValue();
    emailService.sendBulkEmails.mockImplementation(mockSendBulkEmails);

    await emailCorn.run(); // Simulate running the cron job

    expect(pendingRequestStore.getPendingRequests).toHaveBeenCalledTimes(1);
    expect(mockSendBulkEmails).toHaveBeenCalledTimes(1);
    expect(mockSendBulkEmails).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          username: 'John',
          message: 'Merry Christmas!',
        }),
        expect.objectContaining({
          username: 'Jane',
          message: 'Happy Holidays!',
        }),
      ]),
    ); // Verify email data passed to sendBulkEmails
  });

  test('skips sending emails if no pending requests', async () => {
    pendingRequestStore.getPendingRequests.mockReturnValue([]);
    const mockSendBulkEmails = jest.fn();
    emailService.sendBulkEmails.mockImplementation(mockSendBulkEmails);

    await emailCorn.run();

    expect(pendingRequestStore.getPendingRequests).toHaveBeenCalledTimes(1);
    expect(mockSendBulkEmails).not.toHaveBeenCalled();
  });

  test('logs error and continues on email sending failure', async () => {
    const mockPendingRequests = [
      {
        username: 'John',
        message: 'Merry Christmas!',
        address: 'example@mail.com',
      },
    ];
    pendingRequestStore.getPendingRequests.mockReturnValue(mockPendingRequests);
    const mockError = new Error('Failed to send emails');
    emailService.sendBulkEmails.mockRejectedValue(mockError);
    const mockLoggerError = jest.fn();
    logger.error = mockLoggerError;

    await emailCorn.run();

    expect(pendingRequestStore.getPendingRequests).toHaveBeenCalledTimes(1);
    expect(emailService.sendBulkEmails).toHaveBeenCalledTimes(1);
    expect(mockLoggerError).toHaveBeenCalledTimes(1);
    expect(mockLoggerError).toHaveBeenCalledWith({
      operation: 'emailCorn',
      message: 'Error sending bulk emails',
      data: mockError,
    });
  });
});
