'use strict';

class Animal {
  constructor(name, species){
    this.name = name;
    this.species = species;
    this.next = null;
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(name, species){
    let newAnimal = new Animal(name, species);
    if (this.front){
      this.back.next = newAnimal;
    } else {
      this.front = newAnimal;
    }
    this.back = newAnimal;
  }

  dequeue(pref){
    let wantedAnimal = null;
    console.log('species of front', this.front.species, 'pref', pref);
    while(this.front){
      if(this.front.species === pref) {
        wantedAnimal = this.front.species;
        this.front = this.front.next;
        if(this.front === this.back){
          this.back = null;
        }
      }
      if(this.front.next){
        this.front = this.front.next;
      }
    }
    return wantedAnimal;
  }

  isEmpty(){
    return (this.front === null);
  }

}


module.exports = { AnimalShelter };
