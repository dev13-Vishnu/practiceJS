class Node{
    constructor(key,value) {
        this.key = key,
        this.value = value,
        this.next =null
    }
}

class HashTable {
    constructor( size) {
        this.table = new Array (size);
    }
    _hash(key) {
        let hash =0;
        for(let i = 0; i< key.length; i++ ) {
            hash = key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.table[index]) {
            this.table[index] = new Node(key, value);
        } else {
            let current = this.table[index];
            while(current.next) {
                if(current.key === key){
                    current.value = value;
                    return;
                }
                current = current.next;
            }
            current.next = new Node(key, value);
        }
    }
    get(key) {
        let index = this._hash(key) 
        let current = this.table[index];
        while(current) {
            if(current.key === key) return current.value;
            current = current.next;
        }
        return undefined;
    }

    
}

const hashTable = new HashTable(10  );
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("name", "Bob"); // Collision handled using linked list

console.log(hashTable.get("name")); // Output: Bob
console.log(hashTable.get("age"));  // Output: 25