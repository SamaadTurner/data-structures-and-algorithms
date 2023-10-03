'use strict';
'use strict';

class PseudoQueue {
  constructor(){
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(value){
    while(this.s1.length > 0){
      this.s2.push(this.s1.pop());
    }
    this.s1.push(value);
    while(this.s2.length > 0){
      this.s1.push(this.s2.pop());
    }
  }

  dequeue(){
    let removedValue = null;
    if(this.s1.length === 0){
      return removedValue;
    }
    removedValue = this.s1.pop();
    return removedValue;
  }

}


module.exports = { PseudoQueue };
