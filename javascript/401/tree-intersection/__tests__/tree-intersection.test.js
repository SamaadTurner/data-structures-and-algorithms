'use strict';

const { tree_intersection } = require('../index');
const { BinaryTree } = require('../../trees');

describe('Tree Intersection', () => {

  test('Successfully intersect two binary trees', () => {
    let tree = new BinaryTree;
    tree.root = 1;
    tree.add = 2;
    tree.add = 3;

    let tree2 = new BinaryTree;
    tree2.root = 1;
    tree2.add = 3;
    tree2.add = 5;

    let intersection = tree_intersection(tree, tree2);

    expect(intersection).toEqual([]);
  });

});
