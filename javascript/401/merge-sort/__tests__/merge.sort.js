'use strict';

const { mergeSort } = require('../index.js');

describe('insertionSort', () => {

  test('[8,4,23,42,16,15]', () => {
    let array = [8,4,23,42,16,15];
    expect(mergeSort(array)).toEqual([4,8,15,16,23,42]);
  });

  test('[20,18,12,8,5,-2]', () => {
    let array = [20,18,12,8,5,-2];
    expect(mergeSort(array)).toEqual([-2,5,8,12,18,20]);
  });

  test('[5,12,7,5,5,7]', () => {
    let array = [5,12,7,5,5,7];
    expect(mergeSort(array)).toEqual([5,5,5,7,7,12]);
  });

  test('[2,3,5,7,13,11]', () => {
    let array = [2,3,5,7,13,11];
    expect(mergeSort(array)).toEqual([2,3,5,7,11,13]);
  });
  //sdfsdfs

});
