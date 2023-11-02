'use strict';

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};
    this.buckets[position] = data;
  }

  get(key){
    let position = this.hash(key);
    if(this.buckets[position]){
      return this.buckets[position][key];
    } else {
      return null;
    }
  }

  has(key){
    let position = this.hash(key);
    let result = this.buckets[position] ? true : false;
    return result;
  }

  keys(){
    let results = this.buckets.reduce((keysArr, bucket) => {
      if(bucket){
        keysArr.push(Object.keys(bucket)[0]);
        return keysArr;
      } else {
        return keysArr;
      }
    }, []);
    return results;
  }

}

function leftJoin(leftMap, rightMap){
  let output = [];
  let leftKeys = leftMap.keys();
  let rightKeys = rightMap.keys();
  if(leftKeys.length < 0){
    return output;
  }
  for(let i = 0; leftKeys.length > i; i++){
    let forArray = [];
    forArray.push(leftKeys[i]);
    forArray.push(leftMap.get(leftKeys[i]));
    {
      rightKeys.includes(leftKeys[i])
        ? forArray.push(rightMap.get(leftKeys[i]))
        : forArray.push(null);
    }
    output.push(forArray);
  }
  return output;
}

module.exports = { HashTable, leftJoin };
