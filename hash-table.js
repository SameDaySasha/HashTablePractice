const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hash = sha256(key);
    return parseInt(hash.slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let hashModKey = this.hashMod(key);
    if(this.data[hashModKey] === null) {
        this.data[hashModKey] = new KeyValuePair(key, value);
        this.count++;
    } else {
        throw new Error("hash collision or same key/value pair already exists!");
    }
  }

  insertWithHashCollisions(key, value) {
    let hashModKey = this.hashMod(key)
    let newNode = new KeyValuePair(key, value)
  if(this.data[hashModKey] === null) {
    this.data[hashModKey] = newNode
    this.count++;
    } else {
     newNode.next = this.data[hashModKey]
     this.data[hashModKey] = newNode
     this.count++;
    }
  }
  insert(key, value) {
    
    let hashModKey = this.hashMod(key)
    let newNode = new KeyValuePair(key, value)
    let currentNode = this.data[hashModKey]
   if(this.data[hashModKey] === null){
    this.data[hashModKey] = newNode
    this.count++;
   } else {
     while(currentNode){
      if(currentNode.key === key){
        currentNode.value = value
        return currentNode
      }
      currentNode = currentNode.next
     } 
     newNode.next = this.data[hashModKey]
     this.data[hashModKey] = newNode
     this.count++
   }
    
   
    
  }

}


module.exports = HashTable;
