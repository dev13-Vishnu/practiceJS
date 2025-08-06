class HashTable{
    constructor(size =5) {
        this.table = new Array(size);
        this.count =0;
    }
    _hash(key) {
        let hash =0;
        for(let char of key){
            hash = (hash + char.charCodeAt(0)) % this.table.length;
        }
        return hash;
    }
    set(key,value){
        let index = this._hash(key) ;
        if(!this.table[index]) this.table[index] = [];
        this.table[index].push([key, value]);
    }
    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if(bucket){
            for(let [k,v] of bucket) {
                if(k ===key) return v;
            }
        }
        return undefined;
    }
    keys(){
        let result = [];
        for(let bucket of this.table){
            if(bucket) {
                for (let [k] of bucket) {
                    result.push(k)
                }
            }
        }
        return result

    }
}
const ht = new HashTable();

ht.set("name", "Vishnu");
ht.set("age", 25);
ht.set("role", "Instructor");

console.log(ht.get("name"));        // Vishnu

console.log(ht.keys());             // ["name", "age"]
