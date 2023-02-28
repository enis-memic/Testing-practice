const capitalizeString = require('./capitalize.js');

test('Capitalize', () => {
  //arange
  const str = 'enis';

  //act
  const result = capitalizeString(str);

  //assert
  expect(result).toBe('ENIS');
});
