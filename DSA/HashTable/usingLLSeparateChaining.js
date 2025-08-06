class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
    }
    insert(key,value) {
        const newNode = new Node (key, value);
        if(!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    get(key) {
         let current = this.head;
         while (current) {
            if(current.key === key) return current.value;
            current = current.next;
         }
         return undefined;
    }
    remove(key) {
        if(!this.head) return;
        if(this.head.key === key) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next&& current.next.key !== key){
            current = current.next;
        }
        if(current.next) {
            current.next = current.next.next;
        }
    }
}

class HashTable{
    constructor(size= 53) {
        this.table= new Array(size);
    }
    hash(key){
        let hash = 0;
        for(let char of key) {
            hash = (hash + char.charCodeAt(0)* 31) %this.table.length;
        }
        return hash;
    }

    set(key,value){
        const index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = new LinkedList();
        }
        this.table[index].insert(key,value);
    }
    get(key){
        const index = this.hash(key)
        if(this.table[index]){
            return this.table[index].get(key);
        }
        return undefined;
    }
    remove(key) {
        const index = this.hash(key);
        if(this.table[index]){
            this.table[index].remove(key);
        }
    }
}
const ht = new HashTable();

ht.set("name", "Vishnu");
ht.set("age", 25);
ht.set("mane", "CollisionTest"); // intentionally collides with "name" in small tables

console.log(ht.get("name")); // Vishnu
console.log(ht.get("age"));  // 25
console.log(ht.get("mane")); // CollisionTest

ht.remove("name");
console.log(ht.get("name")); // undefined