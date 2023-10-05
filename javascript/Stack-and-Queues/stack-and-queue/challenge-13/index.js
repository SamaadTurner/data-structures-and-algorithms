'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(){
    let removedValue = null;
    if(this.top){
      removedValue = this.top.value;
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek(){
    if(this.top !== null){
      return this.top.value;
    } else {
      return null;
    }
  }

  isEmpty(){
    return (this.top === null);
  }

}

function validateBrackets(string){
  let stack = [];

  for(let i = 0; i < string.length; i++){
    let current = string[i];
    if(current === '(' || current === '{' || current === '['){
      stack.push(current);
      continue;
    }
    console.log('STACK: ', stack);
    if(stack === []){
      return true;
    }
    let compare;
    if(current === ')'){
      compare = stack.pop();
      if (compare === '{' || compare === '['){
        return false;
      }
    } else if(current === '}'){
      compare = stack.pop();
      if (compare === '(' || compare === '['){
        return false;
      }
    } else if(current === ']'){
      compare = stack.pop();
      if (compare === '(' || compare === '{'){
        return false;
      }
    }
  }
  return (stack.length === 0);
}



module.exports = { validateBrackets };
