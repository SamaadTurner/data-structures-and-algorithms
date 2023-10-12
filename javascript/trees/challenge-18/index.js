'use strict';

class KaryNode {
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(){
    this.root = null;
  }
}

function fizzBuzz(tree){
  if(!tree){
    return null;
  }

  let traverse = (node) => {
    if (node.left) { traverse(node.left); }

    if (node.value % 15 === 0) { node.value = 'FizzBuzz'; }
    else if (node.value % 5 === 0) { node.value = 'Buzz'; }
    else if (node.value % 3 === 0) { node.value = 'Fizz'; }

    if (node.right) { traverse(node.right); }
  };

  traverse(tree.root);

  return tree;
}

module.exports = {
  KaryNode,
  KaryTree,
  fizzBuzz,
};
