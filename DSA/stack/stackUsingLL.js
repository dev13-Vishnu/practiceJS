
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor () {
        this.top = null;
        this.size = 0
    }
    push(value) {
        const newNode = new Node(value);

        newNode.next = this.top;
        this.top = newNode;
        this.size ++;
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        if(this.isEmpty()){
            return "the stack is empty";
        }
        return this.top.value;
    }
    pop(){
        if(this.isEmpty()) return "the stack is empty."
        let popped= this.top;
        this.top = this.top.next;
        this.size --;
        return popped.value;
    }

}

const stack = new Stack();

stack.push(5);
console.log(stack.peek());
stack.push(10);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());


