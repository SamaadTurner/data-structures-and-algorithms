'use strict';

const { insert, insertionSort } = require('../index.js');

describe('insertionSort', () => {

  test('[8,4,23,42,16,15]', () => {
    let array = [8,4,23,42,16,15];
    expect(insertionSort(array)).toEqual([15,16,42,23,4,8]);
  });

});
