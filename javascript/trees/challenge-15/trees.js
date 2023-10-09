class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let order = [];

    const traverse = (current) => {
      if (current) {
        order.push(current.value);
        traverse(current.left);
        traverse(current.right);
      }
    };

    traverse(this.root);
    return order;
  }

  inOrder() {
    let order = [];

    const traverse = (current) => {
      if (current) {
        traverse(current.left);
        order.push(current.value);
        traverse(current.right);
      }
    };

    traverse(this.root);
    return order;
  }

  postOrder() {
    let order = [];

    const traverse = (current) => {
      if (current) {
        traverse(current.left);
        traverse(current.right);
        order.push(current.value);
      }
    };

    traverse(this.root);
    return order;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }
  add(value) {
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return;
    }
    let current = this.root;
    while(current){
      if(value < current.value){
        if(!current.left){
          current.left = newNode;
          return;
        }
        current = current.left;
      }else{
        if(!current.right){
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
  contains(value){
    let current = this.root;
    while(current){
      if(value === current.value){
        return true;
      }
      if(value < current.value){
        current = current.left;
      }else{
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = {BinaryTree, BinarySearchTree, Node};

// let tree = new BinaryTree();

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// let node5 = new Node(5);
// let node6 = new Node(6);
// let node7 = new Node(7);

// tree.root = node1;

// node1.left = node2;
// node1.right= node3;
// node2.left = node4;
// node2.right = node5;
// node5.right = node6;
// node5.left = node7;


// let preOrder = tree.preOrder();
// let inOrder = tree.inOrder();
// let postOrder = tree.postOrder();
// console.log(preOrder);
// console.log(inOrder);
// console.log(postOrder);
