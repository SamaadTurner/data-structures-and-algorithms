'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Testing the Linked List class', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    // Add test assertions for the insert function here if needed
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');

    expect(linkedList.head.value).toEqual('a');
    expect(linkedList.head.next).toEqual(null);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');
    linkedList.insert('d');
    // Add test assertions for inserting multiple nodes here if needed
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');
    linkedList.insert('d');

    expect(linkedList.includes('b')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');
    linkedList.insert('d');

    expect(linkedList.includes('e')).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');
    linkedList.insert('d');

    expect(linkedList.toString()).toEqual('{ d } -> { c } -> { b } -> { a } -> NULL');
  });
});
