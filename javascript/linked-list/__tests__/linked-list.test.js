'use strict';

// Require our linked list implementation
const {LinkedList} = require('../index.js');

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

  test('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('c', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { l } -> { d } -> NULL');
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.insert('d');
    list.insert('c');
    list.insert('b');
    list.insert('a');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('d', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { l } -> NULL');
  });

  test('Where k is greater than the length of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromEnd(10)).toEqual(null);
  });

  test('Where k and the length of the list are the same', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromEnd(3)).toEqual('a');
  });

  test('Where k is not a positive integer', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromEnd(-3)).toEqual('d');
  });

  test('Where the linked list is of a size 1', () => {
    const list = new LinkedList();
    list.append('a');

    expect(list.toString()).toEqual('{ a } -> NULL');
    expect(list.kthFromEnd(0)).toEqual('a');
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromEnd(2)).toEqual('b');
  });
  test('able to zip two lists together', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    const list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');
    list2.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list2.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    const result = LinkedList.zipLists(list, list2); // Call zipLists as a static method
    expect(result.toString()).toEqual('{ a } -> { a } -> { b } -> { b } -> { c } -> { c } -> { d } -> { d } -> NULL');
  });

  test('able to zip two lists together with list1 longer', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    list.append('e');
    const list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');
    list2.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> NULL');
    expect(list2.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    const result = LinkedList.zipLists(list, list2); // Call zipLists as a static method
    expect(result.toString()).toEqual('{ a } -> { a } -> { b } -> { b } -> { c } -> { c } -> { d } -> { d } -> { e } -> NULL');
  });

  test('able to zip two lists together where list2 is longer', () => {
    const list1 = new LinkedList();
    list1.append('a');
    list1.append('b');
    list1.append('c');
    list1.append('d');

    const list2 = new LinkedList();
    list2.append('a');
    list2.append('b');
    list2.append('c');
    list2.append('d');
    list2.append('e');

    expect(list1.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list2.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> NULL');
    const result = LinkedList.zipLists(list1, list2); // Call zipLists as a static method
    expect(result.toString()).toEqual('{ a } -> { a } -> { b } -> { b } -> { c } -> { c } -> { d } -> { d } -> { e } -> NULL');
  });

  test('test zip if one list is empty', () => {
    const list1 = new LinkedList();
    list1.append('a');
    list1.append('b');
    list1.append('c');
    list1.append('d');

    const list2 = new LinkedList();

    expect(list1.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list2.toString()).toEqual('NULL');
    const result = LinkedList.zipLists(list1, list2); // Call zipLists as a static method
    expect(result.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
  });
});
