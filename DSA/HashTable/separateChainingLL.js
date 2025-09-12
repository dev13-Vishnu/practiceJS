class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable{
    constructor(size = 10){
        this.buckets = new Array (size);
        this.size = size;
    }
    _hash(key) {
        let hash = 0; 
        for(let char of key){
            hash += charCodeAt(0); 
        }
        return hash % this.size;
    }
    set(key, value){
        let index = this._hash(key);
        const newNode = new Node(key,value)
        if(!this.buckets[index]){
            this.buckets[index] = newNode;
            return;
        }
        
        newNode.next = this.buckets[index];
        this.buckets[index] = newNode;
    }  
    get(key){
        let index = this._hash(key);
        let current = this.buckets[index];
        while(current){
            if(current.key=== key){
                return current.value;
                current = current.next;
            }
        }
        return undefined;
    }
    remove(key){
        let index = this._hash(key);
        let current = this.buckets[index];
        let prev = null;
        while(current){
            if(current.key === key){
                if(prev){
                    prev.next = current.next;
                } else {
                    this.buckets[index] = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        }
    }
    print() {
        for(let i = 0; i< this.size; i++){
            let current = this.buckets[i];
            let bucketValues = [];
            while(current) {
                bucketValues.push(`[${current.key}: ${current.value}]`)
                current = current.next;
            }
            if(bucketValues.length > 0){
                console.log ( i, "=>", bucketValues.join("->"))
            }
        }
    }

}