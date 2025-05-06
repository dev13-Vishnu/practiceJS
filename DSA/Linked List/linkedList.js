class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next) {
            current  = current.next;
        }
        current.next = newNode;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    print() {
        let current = this.head;
        const values = [];
        while(current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join('->'));
    }
    delete(value) {
        if(!this.head) return;
        if(this.head.value === value){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next && current.next.value !== value) {
            current = current.next;
        }
        if(current.next) {
            current.next = current.next.next;
        }
    }
    find(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value){
                console.log(currentNode);
                return;
            }
            currentNode= currentNode.next;
        }
        console.log( null);
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.print(); // Output: 5 -> 10 -> 20 -> 30
list.find(20);

list.delete(20);
list.find(20);
list.print(); // Output: 5 -> 10 -> 30

