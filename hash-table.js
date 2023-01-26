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
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets)
    for (let i = 0; i < numBuckets; i++){
      this.data[i] = null
    }
  }

  hash(key) {

    let res = [];
    let sha = sha256(key)
    for (let i = 0; i < sha.length; i++){
      let ele = sha[i]
      let count = 0;
      if (!count === 8){
        res.push(ele)
        count++
      } else {return res.join('')}
    }
  }

  hashMod(key) {
    // Your code here
  }

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;