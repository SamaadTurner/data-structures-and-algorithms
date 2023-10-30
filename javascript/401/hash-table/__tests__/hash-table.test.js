'use strict';

const { HashTable } = require('../index');

describe('Hash Tables', () => {

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const table = new HashTable(1024);
    expect(table.size).toEqual(1024);
  });

  test('Retrieving based on a key returns the value stored', () => {
    const table = new HashTable(1024);
    table.set('sam', 'this is my value');
    expect(table.get('sam')).toEqual('this is my value');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const table = new HashTable(1024);
    table.set('sam', 'this is my value');
    expect(table.get('jon')).toEqual(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new HashTable(1024);
    table.set('sam', 'this is my value');
    table.set('jon', 'how do we define value');
    let keys = table.keys();
    expect(keys).toEqual(['sam', 'jon']);
  });

  test('Successfully handle a collision within the hashtable', () => {
    const table = new HashTable(1024);
    table.set('sam', 'this is my value');
    table.set('Kei', 'how do we define value');
    expect(table.get('Kei')).toEqual('how do we define value');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const table = new HashTable(1024);
    table.set('sam', 'this is my value');
    table.set('Kei', 'how do we define value');
    expect(table.get('Kei')).toEqual('how do we define value');
  });

  test('Successfully hash a key to an in-range value', () => {
    const table = new HashTable(1024);
    expect(table.hash('sam')).toEqual(383);
  });

});
