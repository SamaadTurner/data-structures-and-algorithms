'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  append(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
    }
  }
  insertBefore(value, newValue) {
    // adds a new node
    let newNode = new Node (newValue);
    // adds a new node with the given new value immediately before the first node that has the value specified
    if (!this.head) {
      this.head = newNode;
      return;
    }
    else {
      let prevNode = null;
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          newNode.next = currentNode;
          prevNode.next = newNode;
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.export = {LinkedList, Node};

