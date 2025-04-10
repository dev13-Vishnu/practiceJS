class Stack {
    constructor() {
        this.stack = {};
        this.top = -1;
    }
    push(element) {
        this.top +=1;
        this.stack[this.top] = element;
    }
    pop() {
        if(this.isEmpty()) return "The stack is empty";

        const popped = this.stack[this.top];
        delete this.stack[this.top];
        this.top -=1;
        return popped;
    }
    isEmpty() {
        return this.top === -1;
    }
    peek(){
        return this.stack[this.top]
    }
    size() {
        return this.top + 1;
    }
    display() {
        console.log("stack elements");
        for(let i = this.top; i>=0 ; i--) {
            console.log(this.stack[i]);
        }
    }
}

let stack = new Stack;

stack.push(5);
console.log(
    stack.peek())

    stack.push(6);
    console.log(stack.peek());
    console.log(stack.size());

    console.log(stack.pop());

    console.log(stack.size());

    for(let i = 0 ; i<= 10; i++){
        stack.push(i);
    }
    console.log("stack last peek:",stack.peek());


    stack.display();