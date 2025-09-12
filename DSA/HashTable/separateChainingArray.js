class HashTable {
    constructor(size = 10){
        this.buckets = new Array(size);
        this.size = size;
    }
    _hash(key){
        let hash = 0;
        for(let char of key){
            hash += char.charCodeAt(0);
        }
        return hash %this.size;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.buckets[index]){
            this.buckets[index] = [];
        }
        for(let pair of this.buckets[index]){
            if(pair[0] === key){
                pari[1] = value;
                return;
            }
        }
        this.buckets[index].push([key,value])
    }
    get(key){
        let index = this._hash(key);
        if(!this.buckets[index]) return undefined;
        for(let pair of this.buckets[index]){
            if(pair[0] === key) {
                return pair[1];
            }
        }
        return undefined;
    }
    remove(key) {
        let index = this._hash(key);
        if(!this.buckets[index]) return;

        this.buckets[index] = this.buckets[index].filter(pair => pair[0] !== key);
    }
    print() {
        this.buckets.forEach((bucket,i) => {
            if(bucket) {
                console.log(i, bucket);
            }
        })
    }
}

let table = new HashTable(5);

table.set("name", "Vishnu");
table.set("age", 22);
table.set("job", "Developer");
table.set("mane", "Collision Test"); // same bucket as "name"

console.log(table.get("name")); // Vishnu
console.log(table.get("age"));  // 22

table.print();
table.remove("job");
table.print();
