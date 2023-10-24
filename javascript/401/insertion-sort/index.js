'use strict';

function insert(array, value){
  let i = 0;
  while(value>array.i){
    i = i + 1;
  }
  while(i < array.length){
    let temp = array[i];
    array[i] = value;
    value = temp;
    i = i + 1;
  }
  array.push(value);
}

function insertionSort(array){
  let sorted = [];
  sorted[0] = array[0];
  for(let i = 1; i < array.length; i++){
    insert(sorted, array[i]);
  }
  return sorted;
}

module.exports = {
  insert,
  insertionSort,
};
