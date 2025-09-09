class Node {
    constructor(data){
        this.value = data;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.count = 0;
    }
    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top   = node;
        this.count++;
    }
    pop() {
        if(this.isEmpty()) return null;
        let popped = this.top.value;
        this.top = this.top.next;
        this.count--;
        return popped;
    }
    peek() {
        return this.isEmpty() ? null : this.top.value;
    }
    isEmpty(){
        return this.count === 0;
    }
    size () {
        return this.count;
    }
    clear() {
        this.top = null;
        this.count = 0;
    }
    print() {
        let current = this.top
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
         console.log("Stack (top-> botton):", result.join(" "));
    }
    toArray() {
        let current = this.top;
        let result =[];
        while (current ) {
            result.push(current.value);
            current= current.next;
        }
        return result;
    }
    search(value){
        let current = this.top;
        let position = 1;
        while(current ) {
            if(current.value === value){
                return position;
            }
            current = current.next;
            position++;
        }
        return null;
    }
    clone() {
        const newStack = new Stack();
        let elements = this.toArray().reverse();
        for(let val of elements){
            newStack.push(val);
        }
        return newStack;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Stack (top -> bottom): 30 20 10
console.log(stack.pop());    // 30
console.log(stack.peek());   // 20
console.log(stack.size());   // 2
console.log(stack.search(10)); // 2
console.log(stack.toArray()); // [20, 10]

const clonedStack = stack.clone();
clonedStack.print(); // Stack (top -> bottom): 20 10
