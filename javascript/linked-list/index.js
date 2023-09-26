'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(arg, value){
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    if(this.head.value === arg){
      node.next = this.head;
      this.head = node;
      return;
    } else {
      let prevNode = null;
      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === arg){
          node.next = currentNode;
          prevNode.next = node;
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = node;
    }
  }

  insertAfter(arg, value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === arg) {
        node.next = currentNode.next;
        currentNode.next = node;
        return;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString(){
    let current = this.head;
    let string = `{ ${ current.value } }`;
    current = current.next;
    while(current){
      string = `${string} -> { ${current.value} }`;
      current = current.next;
    }
    if (current === null) {
      string = `${string} -> NULL`;
    }
    return string;
  }

  kthFromEnd(k) {
    let tailFinder = this.head;
    let count = 0;
    let current = null;
    while (tailFinder !== null) {
      if (count > k - 1) {
        if (current === null) {
          current = this.head;
        } else {
          current = current.next;
        }
      }
      tailFinder = tailFinder.next;
      count++;
    }
    if(k > count){
      return null;
    } else{
      return current.value;
    }
  }

  // traversal(){
  //   let current = this.head;
  //   while(current){
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }

}
module.exports = { LinkedList, Node };
