class HashTable{
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let char of key){
            total += char.charCodeAt[0];
        }
        return total % this.size;
    }
    set(key,value){
         let index = this.hash(key);
         const bucket = this.table[index];
         if(!bucket) {
            this.table[index] = [[key,value]];
         } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                sameKeyItem [1] = value;
            }else {
                bucket.push([key,value]);
            }
         }
    }
    get(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            let sameKeyItem = bucket.find(item => item[1] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1);
            }
        }
    }
    display(){
        for(let i =0; i <= this.size;i++) {
            if(this.table[i]) {
                console.log(i,this.table[i])
            }
        }
    }
}