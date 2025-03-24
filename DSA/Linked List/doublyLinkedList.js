class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length= 0;
    }
    addAtBeggining(data) {
        const newNode = new Node(data) ;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev =  newNode;
            this.head = newNode;
        }
        this.length++
    }
    addAtEnd(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    removeFirst() {
        if(!this.head) {
            console.log("List is empty");
            return;
        } 
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.rev = null
        }
        this.length--;
        
    }
    removeLast() {
        if(!this.head) {
            console.log("List is empty!");
            return;
        }
        if (this.head === this.tail) {
            this.head=this.tail= null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
    }
    find (value) {
        let current = this.head;

        while(current) {
            if(current.data === value){
                return "exists"
            }
            current= current.next;
        }
        return "not found";
    }
    printListForward() {
        let elements = [];
        let current = this.head;
        while(current){
            elements.push(current.data);
            current = current.next;
        } 
        console.log("forward",elements.join('<->'))
    }
    printListBackward() {
        let elements = [];
        let current = this.tail;
        while(current){
            elements.push(current.data)
            current= current.prev
        }
        console.log("backword",elements.join('<->'))
    }
}let dll  = new DoublyLinkedList();

dll.addAtBeggining(10);
dll.addAtEnd(20);
dll.addAtBeggining(50);
dll.addAtEnd(32);
dll.addAtEnd(56); 
dll.printListForward();
dll.printListBackward();
dll.printListForward();
dll.removeLast();
dll.printListForward();
console.log(dll.find(50));
