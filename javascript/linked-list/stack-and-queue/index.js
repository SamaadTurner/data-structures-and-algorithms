class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  coonstrctor(){
    this.top = null;
  }
  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(this.isEmpty()){
      throw new Error('Stack is empty');
    }
    let top = this.top;
    this.top = this.top.next;
    return top.value;
  }
  peek (){
    if(this.isEmpty()){
      throw new Error('Stack is empty');
    }

    return this.top.value;
  }
  isEmpty(){
    return this.top === null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue(){
    if(this.front){
      throw new Error('Queue is empty');
    }
    const frontValue = this.front.value;
    this.front = this.front.next;

    if ( !this.front ) {
      this.rear = null;
    }
    return frontValue;
  }
  peek(){
    if(this.front){
      throw new Error('Queue is empty therefore no peeking');
    }
    return this.front.value;
  }
  isEmpty(){
    return this.front === null;
  }
}


module.exports = {
  Node,
  Stack,
  Queue
};
