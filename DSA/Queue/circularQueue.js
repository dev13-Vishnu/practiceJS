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
        this.items[this.rear] = elementca
    }
}