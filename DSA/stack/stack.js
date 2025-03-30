 class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }
    push(element) {
        this.stack[this.count] = element;
        this.count++;
    }
    pop(){
        if(this.count === 0) {
            return "Stack is empty!";
        }
        let popped = this.stack[this.count -1];
        delete this.stack[this.count-1];
        this.count--;
        return popped;
    }
    peek() {
        if(this.count=== 0) {
            return "Stack is empty!";
        }
        return this.stack[this.count-1];
    }
    isEmpty() {
        return this.count === 0;
    }
    display() {
        console.log("Stack Elements:");
        for(let i =this.count-1 ; i>= 0; i--){
            console.log(this.stack[i]);
        }
    }
 }
 let myStack = new Stack();

myStack.push(8);
myStack.push(9);
myStack.push(20);
console.log(myStack.peek());
myStack.display();
myStack.push(0);
console.log(myStack.peek())
myStack.display();