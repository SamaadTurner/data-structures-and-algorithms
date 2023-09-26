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
  test('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertBefore('c', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { l } -> { c } -> { d } -> NULL');
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('e', 'f');
    list.insertAfter('f', 'g');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> { g } -> NULL');
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertBefore('a', 'l');
    expect(list.toString()).toEqual('{ l } -> { a } -> { b } -> { c } -> { d } -> NULL');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('b', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { l } -> { c } -> { d } -> NULL');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('d', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { l } -> NULL');
  });

});
