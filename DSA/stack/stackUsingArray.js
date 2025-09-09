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
        console.log("items:",items.join(" ")) 
    }
    clear() {
        this.items = [];
        return "Stack cleared Successfully.";

    }
    toArray() {
        if(this.isEmpty() ) return "The stack is empty";
        if(this.items.length == 1) return [...this.items];
        return [...this.items]
    }
    search(value) {
        if(this.isEmpty()) return "Stack is empty";
        let index = this.items.lastIndexOf(value);
        return index === -1 ? "the value doesnot exists": this.items.length - index;
    }
    reverse() {
        if(this.items.length>1 ){
             this.items.reverse();
        }
    }
    clone () {
        return structuredClone(this.items);
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
// stack.clear();
console.log(stack.toArray());
stack.print();
