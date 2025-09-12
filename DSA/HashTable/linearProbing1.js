class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.capacity = size;
        this.count = 0;
    }
    _hash(key){
        let hash = 0; 
        for(let char of key){
            hash = (hash + char.charCodeAt(0) %this.capacity);
        }
        return hash;
    }
    _probe(index) {
        return (index  + 1 ) % this.capacity;
    }
    set(key, value) {
        let index = this._hash(key);
        const start = index;
        while(this.table[index] && 
            this.table[index].key !== key &&
            this.table[index].key !== "_deleted_"
        ) {
            index  = this._probe(index);
            if(index  === start) {
                throw new Error("Table is full");
            }
        }
        this.table[index] ={key,value};
        this.count++;
    }
    get(key){
        let index = this._hash(key);
        const start = index;
        while(this.table[index]){
            if(this.table[index].key === key) return this.table[index].value;
            index = this._probe(index);
            if(index === start) throw  new Error ("The table is full.");
        }
        return undefined;
    }
    delete(key){
        let index = this._hash(key);
        let start = index;
        while(this.table[index]) {
            if(this.table[index].key === key){
                this.table[index] = {key:"_deleted_", value: null};
                return;
            }
            index = this._probe(index);
            if(index === start) break;
        }
    }
}
const ht = new HashTable(5);

ht.set("a", 1);
ht.set("b", 2);
ht.set("c", 3);

console.log(ht.get("a")); // 1
ht.delete("b");
console.log(ht.get("b")); // undefined
ht.set("d", 4);           // should reuse deleted slot
console.log(ht.get("d")); // 4
