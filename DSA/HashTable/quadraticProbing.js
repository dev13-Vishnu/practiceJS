class HashTable {
    constructor(size = 10) {
      this.table = new Array(size);
      this.size = size;
      this.count = 0;
    }
  
    _hash(key) {
      let hash = 0;
      for (let char of key) {
        hash = (hash + char.charCodeAt(0)) % this.size;
      }
      return hash;
    }
  
    set(key, value) {
      let index = this._hash(key);
      let i = 1;
      let originalIndex = index;
  
      while (this.table[index] && this.table[index].key !== key && this.table[index].key !== "__deleted__") {
        index = (originalIndex + i * i) % this.size;
        if (i > this.size) throw new Error("Table is full");
        i++;
      }
  
      this.table[index] = { key, value };
      this.count++;
    }
  
    get(key) {
      let index = this._hash(key);
      let i = 1;
      let originalIndex = index;
  
      while (this.table[index]) {
        if (this.table[index].key === key) return this.table[index].value;
        index = (originalIndex + i * i) % this.size;
        if (i > this.size) break;
        i++;
      }
  
      return undefined;
    }
  
    delete(key) {
      let index = this._hash(key);
      let i = 1;
      let originalIndex = index;
  
      while (this.table[index]) {
        if (this.table[index].key === key) {
          this.table[index] = { key: "__deleted__", value: null };
          this.count--;
          return;
        }
        index = (originalIndex + i * i) % this.size;
        if (i > this.size) break;
        i++;
      }
    }
  }
  const ht = new HashTable(7);

ht.set("a", 1);
ht.set("b", 2);
ht.set("c", 3); // may cause collision

console.log(ht.get("a")); // 1
console.log(ht.get("c")); // 3

ht.delete("b");
console.log(ht.get("b")); // undefined
