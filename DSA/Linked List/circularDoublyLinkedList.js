class Node{
    constructor(data) {
        this.data = data;
        this.next  = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList{
    constructor() {
        this.head = null;
        // this.tail = null; head.prev point to tail so the tail property is reduntant.
    }
    insertAtEnd(data){
        const newNode = new Node(data);

        if(!this.head) {
            this.head  = newNode;
            newNode.next = newNode.prev = newNode;
            return;
        }
        let last = this.head. prev;
        last.next = newNode;
        newNode.prev = last;
        newNode.next = this.head;
        this.head.prev = newNode;

    }
    traverseForward() {
        if(!this.head){
            return 
        }
        let current = this.head;
        let result = [];
        do {
            result.push(current.data);
            current= current.next;
        } while (current!== this.head);
        return (result.join('<->'))
    }
    
}
let cdll = new CircularDoublyLinkedList();

cdll.insertAtEnd(10);
cdll.insertAtEnd(20);
cdll.insertAtEnd(30);
console.log(cdll.traverseForward());