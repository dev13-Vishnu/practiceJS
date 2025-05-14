class Stack{
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items. push(element);
    }
    pop() {
        if(this.isEmpty()) {
            return "underflow";

        }
        return this.items.pop();
    }
    peek() {
        if(this.isEmpty()) {
            return " No elements in Stack.";
        }
        return this.items[this.items.length -1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }
    print() {
        const items = this.items;
        console.log(items.join(" ")) 
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();         // 10 20 30
console.log(stack.pop());  // 30
console.log(stack.peek()); // 20
console.log(stack.isEmpty()); // false
