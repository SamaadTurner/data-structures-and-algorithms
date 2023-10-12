`use strict`;

const { KaryNode, KaryTree, fizzBuzz } = require(`../index.js`);

describe('FizzBuzz Tree', () => {
  it('When given a tree it should return "Fizz" for values divisible by 3', () => {
    let tree = new KaryTree();
    tree.root = new KaryNode(1);
    tree.root.left = new KaryNode(3);
    tree.root.right = new KaryNode(3);
    fizzBuzz(tree);
    expect(tree.root.left.value).toBe('Fizz');
    expect(tree.root.right.value).toBe('Fizz');
  });
  it('When given a tree it should return "Buzz" for divisible by 5', () => {
    let tree = new KaryTree();
    tree.root = new KaryNode(1);
    tree.root.left = new KaryNode(5);
    tree.root.right = new KaryNode(5);
    fizzBuzz(tree);
    expect(tree.root.left.value).toBe('Buzz');
    expect(tree.root.right.value).toBe('Buzz');
  });
  it('When given a tree it should return "FizzBuzz" for divisible by 15', () => {
    let tree = new KaryTree();
    tree.root = new KaryNode(1);
    tree.root.left = new KaryNode(15);
    tree.root.right = new KaryNode(15);
    fizzBuzz(tree);
    expect(tree.root.left.value).toBe('FizzBuzz');
    expect(tree.root.right.value).toBe('FizzBuzz');
  });
});
