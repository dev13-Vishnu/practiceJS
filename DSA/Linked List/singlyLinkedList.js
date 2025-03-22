class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this. head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    printList () {
        let elements = [];
        let currentNode = this.head;

        while(currentNode) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(elements.join('->'))
    }
    removeFirst() {
        if(!this.head) return;
        this.head= this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
    }
    removeLast() {
        if(!this.head) return;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while(currentNode.next !== this.tail){
                currentNode= currentNode.next;
            }
            currentNode.next = null;
            this.tail = currentNode;
        }
        this.length--;
    }
    find(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value  === value) {
                return currentNode
            }
            currentNode= currentNode.next;
        }
        return null;
    }


}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let list = new LinkedList();
for(let num of arr) {
    list.append(num);
}
list.printList();
list.removeFirst();
list.printList();
list.removeLast();
list.printList();
console.log(list.find(2

))
