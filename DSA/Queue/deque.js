class Deque{
    constructor(capacity){
        this.deque = new Array(capacity);
        this.capacity = capacity;
        this.front = 0
        this.rear = -1;
        this.size = 0;

    }
    isEmpty(){
        return this.size === 0;
    }
    isFull(){
        return this.size === this.capacity;
    }
    enqueueFront(element) {
        if(this.isFull()){
            console.log("Que is full");
            return ;
        }
        this.front = (this.front - 1) + this.capacity;
        this.deque[this.front] = element;
        this.size++;
    }
    enqueueRear(element){
        if(this.isFull()){
            console.log("The Queue is full.");
            return ;
        }
        this.rear= (this.rear+ 1) % this.capacity;
        this.deque[this.rear] = element;
        this.size++;
    }
    dequeueFront(){
        if(this.isEmpty()){
            console.log("Dequeu is empty");
            return null;
        }
        let removed = this.deque[this.front];
        this.front = (this.front +1) % this.capacity;
        this.size--;
        return removed;
    }
    dequeueRear(){
        if(this.isEmpty()){
            console.log("Dequeu is empty");
            return null;
        }
        let removed = this.deque[this.rear];
        this.rear = (this.rear -1 + this.capacity) % this.capacity;
        this.size--;
        return removed;
    }
    print(){
        let res = [];
        for(let i = 0; i < this.size; i++){
            res.push(this.deque[(this.front + i) % this.capacity])
        }
        console.log(res.join("<->"));
    }

}


let dq = new Deque(5);

dq.enqueueRear(10);  // [10]
dq.enqueueRear(20);  // [10, 20]
dq.enqueueFront(5);  // [5, 10, 20]
dq.enqueueRear(30);  // [5, 10, 20, 30]
dq.print();          // 5 <-> 10 <-> 20 <-> 30

console.log("Removed from front:", dq.dequeueFront()); // removes 5
console.log("Removed from rear:", dq.dequeueRear());   // removes 30

dq.print(); // 10 <-> 20
