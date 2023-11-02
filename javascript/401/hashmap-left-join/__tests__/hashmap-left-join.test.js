'use strict';

const { HashTable, leftJoin } = require('../index');

describe('leftJoin', () => {

  test('leftJoin works as expected', () => {
    let leftTable = new HashTable(1024);
    leftTable.set('1', 'a');
    leftTable.set('2', 'b');
    leftTable.set('3', 'c');

    let rightTable = new HashTable(1024);
    rightTable.set('1', 'd');
    rightTable.set('3', 'e');
    rightTable.set('5', 'f');

    expect(leftJoin(leftTable, rightTable)).toEqual([['2', 'b', null], ['1', 'a', 'd'], ['3', 'c', 'e']]);
  });

  test('leftJoin returns empty array if no keys in table', () => {
    let leftTable = new HashTable(1024);

    let rightTable = new HashTable(1024);
    rightTable.set('1', 'd');
    rightTable.set('3', 'e');
    rightTable.set('5', 'f');

    expect(leftJoin(leftTable, rightTable)).toEqual([]);
  });

});
