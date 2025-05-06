class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LL{
    constructor() {
        this.head = null;
        this.tail = null;
        this.middle = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
                   
        } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        }

        this.length++;

        if(this.length ===1){
            this.middle = newNode;
        } else if(this.length % 2 === 1) {
            this.middle = this.middle.next;
        }
    }
    deleteFromEnd() {
        if(!this.tail) return ;
        if(this.length ===1) {
            this.head= this.tail = this.middle = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next= null;
        }
        this.length--;
        if(this.length %2 === 0){
            this.middle = this.middle.prev;
        }
    }
    getMiddle() {
        return this.middle ? this.middle.value : null
    }
    printList () {
        if(!this.head) return;
        let currntNode = this.head;
        let values = [];
        while (currntNode) {
            values.push(currntNode.value);
            currntNode = currntNode.next;
        }
        console.log(values.join('->'));
    }
}

const list = new LL();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList(); // List: 1 <-> 2 <-> 3 <-> 4 <-> 5
console.log("Middle:", list.getMiddle()); // Middle: 3

list.deleteFromEnd();
list.printList(); // List: 1 <-> 2 <-> 3 <-> 4
console.log("Middle:", list.getMiddle()); // Middle: 2