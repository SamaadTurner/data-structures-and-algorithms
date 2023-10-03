'use strict';

const { PseudoQueue } = require('./index.js');

describe('Stack', () => {

  test('Can add to pseudoQueue', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.s1[0]).toEqual(1);
  });

  test('Can add multiple values to pseudoQueue', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.s1[0]).toEqual(3);
    expect(pseudoQueue.s1[1]).toEqual(2);
    expect(pseudoQueue.s1[2]).toEqual(1);
  });

  test('New values always go to front of pseudoQueue', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.s1[0]).toEqual(3);
    pseudoQueue.enqueue(4);
    expect(pseudoQueue.s1[1]).toEqual(3);
    expect(pseudoQueue.s1[2]).toEqual(2);
    expect(pseudoQueue.s1[3]).toEqual(1);
  });

  test('Dequeue the value that was first added', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.s1[0]).toEqual(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.s1[0]).toEqual(2);
    pseudoQueue.dequeue();
    expect(pseudoQueue.s1[0]).toEqual(2);
  });

  test('Multiple Dequeues works', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.s1[0]).toEqual(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.s1[0]).toEqual(2);
    pseudoQueue.dequeue();
    expect(pseudoQueue.s1[0]).toEqual(2);
    pseudoQueue.dequeue();
    expect(pseudoQueue.s1).toEqual([]);
  });

});
