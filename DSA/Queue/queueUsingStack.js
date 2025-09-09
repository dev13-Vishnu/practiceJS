class QueueUsingStack{
    constructor() {
        this.stack1= [];
        this.stack2 = [];
    }
    enqueue(x){
        this.stack1.push(x);
    }
    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                    this.stack2.push(this.stack1.pop());
            }
        }
        if(this.stack2 === 0) {
            console.log("Queue is empty.");
            return null;
        }
        return this.stack2.pop(); 
    }
    peek(){
        if(this.stack2.length === 0){
            while(this.stack1.length> 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        if(this.stack2.length === 0) {
            console.log("Queue is empty.");
            return null;
        }
        return this.stack2[this.stack2.length - 1];

    }
    isEmpty(){
        return this.stack1.length === 0&& this.stack2.length === 0;
    }
    size() {
        return this.stack1.length + this.stack2.length;
    }
    print(){
        let elements = [];
        for(let i = this.stack2.length - 1; i >= 0; i --){
            elements.push(this.stack2[i]);
        }
        for(let i = 0; i < this.stack1.length; i++){
            elements .push(this.stack1[i]);
        }
        console.log(elements.join('<-'));

    }
}

let q = new QueueUsingStack();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log("Peek:", q.peek());   // Peek: 10
console.log("Size:", q.size());   // Size: 3
q.print();                        // 10 <- 20 <- 30

console.log("Dequeued:", q.dequeue()); // 10
q.print();                              // 20 <- 30
console.log("Size:", q.size());         // 2

q.enqueue(40);
q.print();                              // 20 <- 30 <- 40
