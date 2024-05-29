const { 
    CustomError,
    AppError,
    ValidationError,
    NotFoundError,
    ForbiddenError,
    NotAuthenticatedError,
    NotImplementedError,
    ConflictError
  } = require('../ApiError');
  
  const strings = require('../../config/strings');
  
  describe('Custom Errors', () => {
    test('CustomError should initialize correctly', () => {
      const error = new CustomError({
        message: 'Test message',
        code: 123,
        details: ['detail1', 'detail2'],
        error: new Error('Inner error'),
        data: { key: 'value' },
      });
  
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe('Test message');
      expect(error.code).toBe(123);
      expect(error.details).toEqual(['detail1', 'detail2']);
      expect(error.error).toBeInstanceOf(Error);
      expect(error.error.message).toBe('Inner error');
      expect(error.data).toEqual({ key: 'value' });
    });
  
    test('AppError should default message and code', () => {
      const error = new AppError({});
  
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('App Error');
      expect(error.code).toBe(500);
    });
  
    test('ValidationError should default message and code', () => {
      const error = new ValidationError({ error: 'some error', data: {}, details: [] });
  
      expect(error).toBeInstanceOf(ValidationError);
      expect(error.message).toBe(strings.validationError);
      expect(error.code).toBe(400);
    });
  
    test('NotFoundError should default message and code', () => {
      const error = new NotFoundError({ error: 'some error', data: {}, details: [] });
  
      expect(error).toBeInstanceOf(NotFoundError);
      expect(error.message).toBe(strings.resourceNotFound);
      expect(error.code).toBe(404);
    });
  
    test('ForbiddenError should default message and code', () => {
      const error = new ForbiddenError({ error: 'some error', data: {}, details: [] });
  
      expect(error).toBeInstanceOf(ForbiddenError);
      expect(error.message).toBe(strings.forbidden);
      expect(error.code).toBe(403);
    });
  
    test('NotAuthenticatedError should default message and code', () => {
      const error = new NotAuthenticatedError({ error: 'some error', data: {}, details: [] });
  
      expect(error).toBeInstanceOf(NotAuthenticatedError);
      expect(error.message).toBe(strings.userNotAuthenticated);
      expect(error.code).toBe(401);
    });
  
    test('NotImplementedError should default message and code', () => {
      const error = new NotImplementedError({ error: 'some error', data: {}, details: [] });
  
      expect(error).toBeInstanceOf(NotImplementedError);
      expect(error.message).toBe(strings.notImplemented);
      expect(error.code).toBe(501);
    });
  
    test('ConflictError should default message and code', () => {
      const error = new ConflictError({ error: 'some error', data: {}, details: [] });
  
      expect(error).toBeInstanceOf(ConflictError);
      expect(error.message).toBe(strings.resourceConflict);
      expect(error.code).toBe(409);
    });
  });
  