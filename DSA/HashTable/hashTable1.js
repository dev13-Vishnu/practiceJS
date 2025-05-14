class HashTable{
    constructor(size = 100){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total =0;

        for(let char of key){
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }
    set(key,value){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find(item => item [0] === key);
            if(sameKeyItem) {
                sameKeyItem[1] = value;

            } else {
                bucket.push([key, value]);
            }
        }
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const sameKeyItem = bucket.find(item=> item[0] === key);
            if(sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }
    remove(key) {
        const index = this.hash(key);

        const bucket = this.table[index];
        if(bucket) {
            this.table[index] = bucket.filter(item => item[0] != key);
        }
    }
    display() {
        for(let i = 0; i < this.size; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const ht = new HashTable();

ht.set("name", "Vishnu");
ht.set("age", 22);
ht.set("place", "India");
ht.set("eman", "Reversed Vishnu"); // Will collide with "name" due to basic hash

console.log(ht.get("name"));   // Vishnu
console.log(ht.get("place"));  // India

ht.remove("age");
ht.display();
