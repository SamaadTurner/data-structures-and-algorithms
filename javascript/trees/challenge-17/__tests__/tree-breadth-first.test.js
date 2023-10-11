const { TreeNode, breadthFirst } = require('../index.js');

describe('breadthFirst', () => {
  it('should return an empty array for an empty tree', () => {
    const result = breadthFirst(null);
    expect(result).toEqual([]);
  });

  it('should return the values in BFS order for a simple tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    const result = breadthFirst(root);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a single-node tree', () => {
    const root = new TreeNode(42);
    const result = breadthFirst(root);
    expect(result).toEqual([42]);
  });
});
