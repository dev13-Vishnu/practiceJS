class Queue{
    constructor(){
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element) {
        this.queue[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        if(this.isEmpty()){
            return "queue is empty!";
        }
        const item = this.queue[this.front]
        delete this.queue[this.front];
        this.front++;
        return item;
    }
    size() {
        return this.rear - this.front;
    }
    peek() {
        if(this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.queue[this.front];
    }
    isEmpty() {
      return this.front === this.rear;  
    }
    display() {
        if(this.isEmpty()) {
            console.log("The queue is empty!");
            return;
        }
        console.log("Queue Elements:");
        for(let i = this.front; i < this.rear; i++){
            console.log(this.queue[i]);
        }
    }

}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.peek());

q.display();
q.dequeue();
q.display();

console.log(q.size())
console.log(q.isEmpty());