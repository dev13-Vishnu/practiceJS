class StackUsingQueue{
    constructor() {
        this.queue = [];

    }
    push(x){
        const size = this.queue.length;
        this.queue.push(x);
        for(let i = 0; i <size; i++){
            this.queue.push(this.queue.shift());
        }
    }
    pop(){
        if(this.isEmpty()){
            return "Underflow"
        }
        return this.queue.shift()

    }
    top(){
        return this.isEmpty()? null: this.queue[0];

    }
    isEmpty(){
        return this.queue.length=== 0;

    }
    size(){
        return this.queue.length;

    }
    print(){
        console.log('Top->', this.queue.join('<-'), '<-Bottom');
    }
}
const stack = new StackUsingQueue();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();        // Top -> 30 <- 20 <- 10 <- Bottom

console.log(stack.pop()); // 30
console.log(stack.top()); // 20
stack.print();        // Top -> 20 <- 10 <- Bottom
