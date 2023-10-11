class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function breadthFirst(tree) {
  if (!tree) {
    return [];
  }

  const queue = new Queue();
  const order = [];

  queue.enqueue(tree);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    order.push(current.value);

    if (current.left) {
      queue.enqueue(current.left);
    }

    if (current.right) {
      queue.enqueue(current.right);
    }
  }

  return order;
}

module.exports = { TreeNode, Queue, breadthFirst };
