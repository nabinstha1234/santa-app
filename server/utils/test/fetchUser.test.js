// File: mock-order-2.test.ts
const axios = require('axios');
const { getUser } = require('./fetchUser.test');

jest.mock('axios', () => {
  return {
    get: jest.fn().mockResolvedValue('Mock in module factory'),
  };
});

// wrap jest mock method types to package.
const mockedAxios = jest.mocked(axios);

describe('getUser', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should return user data with profile', async () => {
    const mockUsers = [
      { username: 'john_doe', uid: '123' },
      { username: 'jane_doe', uid: '456' },
    ];

    const mockUserProfiles = [
      { userUid: '123', birthdate: '1990-01-01', address: '123 Main St' },
      { userUid: '456', birthdate: '1985-05-15', address: '456 Elm St' },
    ];

    mockedAxios.get.mockImplementation((url) => {
      if (url === usersUrl) {
        return Promise.resolve({ data: mockUsers });
      } else if (url === userProfilesUrl) {
        return Promise.resolve({ data: mockUserProfiles });
      }
    });

    const result = await getUser('john_doe');

    expect(result).toEqual({
      username: 'john_doe',
      address: '123 Main St',
      age: expect.any(Number), // We can check if age is a number since it is calculated based on the current year
    });
  });

  test('should return user data with null profile if no profile is found', async () => {
    const mockUsers = [
      { username: 'john_doe', uid: '123' },
      { username: 'jane_doe', uid: '456' },
    ];

    const mockUserProfiles = [
      { userUid: '456', birthdate: '1985-05-15', address: '456 Elm St' },
    ];

    mockedAxios.get.mockImplementation((url) => {
      if (url === usersUrl) {
        return Promise.resolve({ data: mockUsers });
      } else if (url === userProfilesUrl) {
        return Promise.resolve({ data: mockUserProfiles });
      }
    });

    const result = await getUser('john_doe');

    expect(result).toEqual({
      username: 'john_doe',
      address: null,
      age: null,
    });
  });

  test('should return null if user is not found', async () => {
    const mockUsers = [{ username: 'jane_doe', uid: '456' }];

    mockedAxios.get.mockImplementation((url) => {
      if (url === usersUrl) {
        return Promise.resolve({ data: mockUsers });
      } else if (url === userProfilesUrl) {
        return Promise.resolve({ data: [] });
      }
    });

    const result = await getUser('john_doe');

    expect(result).toBeNull();
  });

  test('should handle errors', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(getUser('john_doe')).rejects.toThrow('Network Error');
  });
});
