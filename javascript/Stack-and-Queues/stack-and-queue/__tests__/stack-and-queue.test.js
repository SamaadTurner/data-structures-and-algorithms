const {Stack, Queue} = require('../index.js');
//const Queue = require('../index.js');
//const Node = require('../stack-and-queue').Node;

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Can successfully push onto a stack', () => {
    stack.push(42);
    expect(stack.peek()).toBe(42);
  });

  it('Can successfully push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('Can successfully pop off the stack', () => {
    stack.push('A');
    stack.push('B');
    expect(stack.pop()).toBe('B');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    stack.push('X');
    stack.push('Y');
    // stack.pop();
    // stack.pop();
    expect(stack.pop()).toEqual('Y');
    expect(stack.pop()).toEqual('X');

    expect(stack.isEmpty()).toEqual(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push('apple');
    stack.push('banana');
    expect(stack.peek()).toBe('banana');
  });

  it('Can successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('Calling pop on empty stack raises an exception', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  it('Calling peek on empty stack raises an exception', () => {
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('Can successfully enqueue into a queue', () => {
    queue.enqueue('red');
    expect(queue.peek()).toBe('red');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.dequeue()).toBe('first');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue('A');
    queue.enqueue('B');
    expect(queue.peek()).toBe('A');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue('apple');
    queue.enqueue('banana');
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('Can successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('Calling dequeue on empty queue raises an exception', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  it('Calling peek on empty queue raises an exception', () => {
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});
