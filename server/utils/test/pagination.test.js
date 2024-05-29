// paging.test.js
const { getPagingArgs, getPagingResult } = require('../paging'); // Replace with actual path

describe('Paging Functions', () => {
  describe('getPagingArgs', () => {
    test('default values', () => {
      const args = {};
      const expected = {
        skip: 0,
        limit: 50,
        sort: { createdAt: 'desc' },
        query: {},
      };
      expect(getPagingArgs(args)).toEqual(expected);
    });

    test('valid arguments', () => {
      const args = {
        skip: 10,
        limit: 25,
        sort: 'name:asc',
        query: { name: 'John' },
      };
      const expected = {
        skip: 10,
        limit: 25,
        sort: { name: 'asc' },
        query: { name: 'John' },
      };
      expect(getPagingArgs(args)).toEqual(expected);
    });

    test('limit capped', () => {
      const args = { limit: 200 };
      const expected = {
        skip: 0,
        limit: 150,
        sort: { createdAt: 'desc' },
        query: {},
      };
      expect(getPagingArgs(args)).toEqual(expected);
    });

    test('invalid sort string', () => {
      expect(() => getPagingArgs({ sort: 'invalidString' })).toThrowError(
        'Invalid sort format',
      );
    });

    test('non-numeric skip or limit', () => {
      expect(() => getPagingArgs({ skip: 'ten', limit: 'fifty' })).toThrowError(
        'skip and limit must be numbers',
      );
    });

    test('negative skip or limit (optional)', () => {
      // Adjust this test based on your desired behavior for negative values
      expect(() => getPagingArgs({ skip: -5, limit: -20 })).toThrowError(
        'skip and limit cannot be negative',
      );
    });
  });

  describe('getPagingResult', () => {
    test('default values', () => {
      const args = {};
      const expected = {
        total: undefined,
        startIndex: 0,
        endIndex: -1,
        hasNextPage: false,
      };
      expect(getPagingResult(args)).toEqual(expected);
    });

    test('valid arguments', () => {
      const args = { skip: 20, limit: 30, total: 100 };
      const expected = {
        total: 100,
        startIndex: 20,
        endIndex: 49,
        hasNextPage: true,
      };
      expect(getPagingResult(args)).toEqual(expected);
    });

    test('endIndex capped', () => {
      const args = { skip: 90, limit: 20, total: 100 };
      const expected = {
        total: 100,
        startIndex: 90,
        endIndex: 99,
        hasNextPage: false,
      };
      expect(getPagingResult(args)).toEqual(expected);
    });

    test('missing total', () => {
      expect(() => getPagingResult({ skip: 10, limit: 15 })).toThrowError(
        'total is required',
      );
    });

    test('non-numeric skip, limit, or total', () => {
      expect(() =>
        getPagingResult({
          skip: 'twenty',
          limit: 'thirty',
          total: 'oneHundred',
        }),
      ).toThrowError('skip, limit, and total must be numbers');
    });
  });
});
