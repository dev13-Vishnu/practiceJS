//  implement stack with push, pop and getMax (all the methods should have o(1) time)

class Stack{
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(value) {
        this.stack.push(value);

        if(this.maxStack.length === 0 || value> this.maxStack[this.maxStack.length -1]){
            this.maxStack.push(value);
        }
    }
    pop() {
        if(this.stack.length === 0) return null;
        let popped = this.stack.pop();
        if(popped === this.maxStack[this.maxStack.length-1]) {
            this.maxStack.pop();
        }

        return popped


    }
    getMax() {
        if(this.maxStack.length === 0) return null;

        return this.maxStack[this.maxStack.length -1];
    }
}

const s = new Stack();
s.push(5);
s.push(1);
s.push(10);
s.push(3);
console.log(s.getMax()); // 10
console.log(s.pop()); // 3
console.log(s.pop()); // 10
console.log(s.getMax()); // 5

