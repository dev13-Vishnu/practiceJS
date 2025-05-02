class Deque{
    constructor() {
        this.items = [];
    }
    pushFront(value) {
        this.items.unshift(value);
    }
    pushBack(value) {
        this.items.push(value);
    }
    popFront() {
        return this.items.shift()
    }
    popBack() {
        return this.items.pop();
    }
    peekFront () {
        return this.items[0];
    }
    peekBack() {
        return this.items[this.items.length -1];
    }


}

const deque = new Deque();

deque.pushBack(10);
deque.pushFront(5);
deque.pushBack(15);
console.log(deque.items); // [5, 10, 15]
console.log(deque.peekFront());
console.log(deque.peekBack());
console.log(deque.popFront()); // removes 5
console.log(deque.popBack());  // removes 15
console.log(deque.items); // [10]
