const { fizzBuzz } = require('./index');
const fixtures = require('./fixtures');

describe('fizzBuzz', () => {
  test('should return original', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzz);
  });

  describe('step 1', () => {
    test.skip('should ...', () => {
      expect(fizzBuzz()).toEqual(fixtures.fizzBuzzFrom1to20);
    });
  });
});
