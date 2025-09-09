class CircularQueue{
    constructor(capacity) {
            this.items = new Array (capacity);
            this.capacity = capacity;
            this.front = -1;
            this.rear = -1;
    }
    isEmpty() {
        return this.front === -1;
    }
    isFull() {
        return (this.rear + 1) % this.capacity === this.front;
    }
    enqueue(element) {
        if(this.isFull()){
            console.log("The Queue is full.");
            return;
        }
        if(this.isEmpty()){
            this.front = 0;
        }
        this.rear = (this.rear+ 1) % this.capacity;
        this.items[this.rear] = element
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty.");
            return null;
        }
        let removed = this.items[this.front];
        if(this.front=== this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }
        return removed;
    }
    peek(){
        if(this.isEmpty()) return "Queue is empty.";
        return this.items[this.front];
    }
    print() {
        if(this.isEmpty()){
            console.log("The Queue is Empty");
            return;
        }
        let result = [];
        let i = this.front;
        while(true){
            result.push(this.items[i]);
            if(i === this.rear) break;
            i = (i+1) % this.capacity;
        }
        console.log(result.join("<-"));
    }

}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.print();  // 10 <- 20 <- 30 <- 40

console.log(cq.dequeue()); // 10
cq.print();  // 20 <- 30 <- 40

cq.enqueue(50);
cq.enqueue(60);
cq.print();  // 20 <- 30 <- 40 <- 50 <- 60

cq.enqueue(70); // Queue is full
