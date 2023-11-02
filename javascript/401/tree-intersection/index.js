'use strict';

const { HashTable } = require('../hash-table');


function tree_intersection(tree1, tree2){
  let values = [];
  let table = new HashTable(1024);
  let current1 = tree1.head;
  let current2 = tree2.head;
  while(current1){
    table.set(current1, current1);
    if(current1.left){
      current1 = current1.left;
    }
    if(current1.right){
      current1 = current1.right;
    }
  }
  while(current2){
    if(table.get(current2)){
      values.push(current2);
      if(current2.left){
        current2 = current2.left;
      }
      if(current2.right){
        current2 = current2.right;
      }
    }
    if(current2.left){
      current2 = current2.left;
    }
    if(current2.right){
      current2 = current2.right;
    }
  }
  return values;
}


module.exports = { tree_intersection };
