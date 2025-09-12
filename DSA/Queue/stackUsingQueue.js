class Stack{
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    }
    push(x){
        this.queue2.push(x);

        while(this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] =[this.queue2, this.queue1];
    }
    pop(){
        if(this.queue1.length ===0){
            console.log("Stack is empty");
            return null;
        }
        return this.queue1.shift();
    }
    top() {
        if(this.queue1.lenth === 0) {
            console.log("The Stack is empty.");
            return null;
        }
        return this.queue1[0]
        
    }
    size(){
        return this.queue1.length;
    }
    isEmpty(){
        return this.queue1.length ===0;
    }
    print() {
        console.log(this.queue1.join("<-"));
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();           // 30 <- 20 <- 10
console.log("Top:", stack.top()); // 30
console.log("Popped:", stack.pop()); // 30
stack.print();           // 20 <- 10
