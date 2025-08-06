class HashTable{
    constructor(size = 10){
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }
    _hash(key) {
        let hash = 0;
        for(let char of key){
            hash = (hash+char.charCodeAt(0)) % this.size;
        }
        return hash;
    }
    _probe(index){
         retun (index + 1) % this.size;
    }
    set(key,value){
        let index = this._hash(key);
        const start  = index;
        while (this.table[index] && this.table[index].key !== key){
            index = this._probe(index);
            if(index === start) throw new Error("Table is full.");
        }
        this.table[index] ={key,value};
        this.count++
    }
    get(key) {
        let index = this._hash(key);
        const start = index;
        while(this.table[index]){
            if(this.table[index].key === key) return this.table[index].value;
            if(index === start) break;

        }
        return undefined;
    }
    delete(key){
        let index = this._hash(key);
        let start = index;
        while(this.table[index]){
            if(this.table[index].key === key) {
                this.table[index]  = {key: "__deleted__", value: null};
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
ht.set("c", 3); // may collide

console.log(ht.get("a")); // 1
ht.delete("b");
console.log(ht.get("b")); // undefined