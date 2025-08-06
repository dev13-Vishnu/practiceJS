class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value){

        const newNode = new Node (value);
        if(this.isEmpty()) {
            this.front = this.rear = newNode;
            
        } else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    peek() {
        if(this.isEmpty()) return " the queue is empty!";
        return this.front.value;
    }

    dequeue() {
        if(this.isEmpty()) {
            return " the queue is empty!";
        }
        const removed = this.front.value;
        this.front = this.front.next
        this.size--;
        if(!this.front) {
            this.rear = null;
        }
        return removed;
    }
    isEmpty(){
        return this.size=== 0;
    }
    display() {
        if(this.isEmpty()) {
            console.log("The queue is empty!");
        } else {
            let current = this.front;
            let result = "";
            while (current) {
                result += current.value + '->';
                current = current.next;
            }
            console.log("queue elements:",result +'null');
        }

    }
}



const queue = new Queue();

for(let i =0; i< 10 ; i++) {
    queue.enqueue(i);
}

queue.display();
console.log(queue.peek());

console.log(queue.dequeue());
queue.display();
