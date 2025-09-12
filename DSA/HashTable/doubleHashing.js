class HashTable{
    constructor(size ) {
        this.table = new Array(size);
        this.capacity = size;
        this. count = 0;
        this.prime  = this._getSmallerPrime(size);
    }
    _hash1(key){
        let hash = 0;
        for(let char of key){
            hash = (hash + char.charCodeAt(0)) % this.capacity;
        }
        return hash;
    }
    _hash2(key){
        let hash = 0; 
        for(let char of key) {
            hash = (hash + char.charCodeAt(0)) % this.prime;
        }
        return this.prime - hash;
    }
    _getSmallerPrime(n) {
        function isPrime(num) {
            if(num < 2 ) return false ;
            for(let i = 2; i * i <= num ; i++) {
                if (num% i === 0) return false;
            }
            return true;
        }
         
    }
}