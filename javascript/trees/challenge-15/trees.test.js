// const { BinarySearchTree } = require('./trees.js');

// describe('Binary Search Tree', () => {
//   let tree;
//   beforeEach(() => {
//     tree = new BinarySearchTree();
//     tree.add(1);
//     tree.add(2);
//     tree.add(3);
//     tree.add(4);
//     tree.add(5);
//     tree.add(6);
//     tree.add(7);
//   });

//   describe('BT', () => {
//     it('should pre-order traverse', () => {
//       expect(tree.preOrder()).toEqual([1, 2, 4, 5, 7, 6, 3]);
//     });
//   });

//   it('should in-order traverse', () => {
//     expect(tree.preOrder()).toEqual([4, 2, 7, 5, 6, 1, 3]);
//   });

//   it('should pre-order traverse', () => {
//     expect(tree.preOrder()).toEqual([4, 7, 6, 5, 2, 3, 1]);
//   });

//   describe('BST', () => {
//     it('should add a node', () => {
//       tree.add(8);
//       expect(tree.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

//     });
//     it('should contain a value', () => {
//       expect(tree.contains(3)).toBe(true);
//       expect(tree.contains(8)).toBe(false);
//     });
//   });

// });

const { Node, BinaryTree, BinarySearchTree } = require('./trees.js');
describe('BT and BST', () => {
  let tree;

  beforeEach(() => {
    tree = new BinarySearchTree();

    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(20);
  });

  describe('BinaryTree', () => {
    it('pre-order traversal', () => {
      expect(tree.preOrder()).toEqual([10, 5, 3, 7, 15, 20]);
    });

    it('in-order traversal', () => {
      expect(tree.inOrder()).toEqual([3, 5, 7, 10, 15, 20]);
    });

    it('post-order traversal', () => {
      expect(tree.postOrder()).toEqual([3, 7, 5, 20, 15, 10]);
    });
  });

  describe('BinarySearchTree', () => {
    it('add a value to the tree', () => {
      tree.add(12);
      expect(tree.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 20]);
    });

    it('check if a value exists in the tree', () => {
      expect(tree.contains(7)).toBe(true);
      expect(tree.contains(12)).toBe(false);
    });
  });
});
