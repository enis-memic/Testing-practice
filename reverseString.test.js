const reverseString = require('./reverseString.js');

test('String is reversed', () => {
  //arrange
  //   const string = 'olleh';

  //   //act
  //   const result = () => reverseString(string);

  //assert
  expect(reverseString('hello')).toBe('olleh');
});
