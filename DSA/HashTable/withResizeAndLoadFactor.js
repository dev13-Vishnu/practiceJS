class HashTable{
    constructor(size = 10){
        this.table = new Array(size);
        this.count  = 0;
    }
    _hash(key){
        let hash =0;
        for(let char of key) {
            hash = (hash + char.charCodeAt(0) )% this.table.length;
        }
        return hash;
    }

    _resize() {
        const oldTable = this.table;
        this.table = new Array(oldTable.length * 2);
        this.count =0;
        for(let entry of this.table){
            if(entry){
                this.set(entry.key, entry.value);
            }
        }
    }
    set(key, value){
        const loadFactor = this.count/  this.table.length;
        if(loadFactor > 0.75) this._resize();

        let index = this._hash(key);
        while(this.table[index]) {
            if(this.table[index].key === key) break;
            index =(index +1) %this.table.length;
        }
        this.table[index] = {key,value};
        this.count++;
    }
    get(key){
        let index = this._hash(key);
        while(this.table[index]){
            if(this.table[index].key === key) return this.table[index].value;
            index =(index  + 1) % this.table.length;
        }
        return undefined; 
    }
    
}
// Instantiate HashTable
const ht = new HashTable(5);

// Add key-value pairs
ht.set("name", "Vishnu");
ht.set("age", 25);
ht.set("role", "Instructor");
ht.set("location", "India");

// Retrieve values
console.log(ht.get("name"));      // Vishnu
console.log(ht.get("age"));       // 25
console.log(ht.get("role"));      // Instructor
console.log(ht.get("location"));  // India

// Test a non-existent key
console.log(ht.get("email"));     // undefined

// Print the internal table to inspect
console.log(ht.table);
