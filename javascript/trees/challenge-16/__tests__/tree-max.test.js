`use strict`;

const { BinaryTree, Node } = require('../tree-max.js');

describe (`Binary Tree Max Value`, () => {

  it(`Can successfully instantiate an empty tree`, () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it(`Can successfully instantiate a tree with a single root node`, () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.root.value).toEqual(1);
  });

  it(`Can successfully return a collection from an in-order traversal`, () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);

    expect(tree.maxValue()).toEqual(15);
  });

});
