class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if( this.isEmpty()) return "the  queue is emepty!";

        return this.items.shift();

    }
    peek(){
        if(this.isEmpty()) return " the queue is empty!";
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }

    display() {
        console.log("elements in the queue : ", this.items.join('<-'));
    }
}

const queue = new Queue()

queue.enqueue(18);
queue.display()

console.log(queue.peek());

queue.enqueue(5);
console.log(queue.peek());
queue.display()

console.log(queue.dequeue());
queue.display();

for (let i = 0 ; i < 10; i++) {
    queue.enqueue(i);
}

queue.display()