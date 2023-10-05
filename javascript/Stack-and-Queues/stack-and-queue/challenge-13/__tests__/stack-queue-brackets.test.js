'use strict';

const { validateBrackets } = require('../index');

describe('Stack', () => {

  test('Can validate correct bracket string', () => {

    expect(validateBrackets('{[()]}')).toBeTruthy();
  });

  test('Can validate incorrect bracket string', () => {

    expect(validateBrackets('{[(}')).toBeFalsy();
  });

  test('Can validate string with no brackets', () => {

    expect(validateBrackets('bob')).toBeTruthy();
  });

  test('Can validate string with nothing', () => {

    expect(validateBrackets('')).toBeTruthy();
  });

});
