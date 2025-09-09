class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }
    insertEnd(data) {
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
            return ;
        }
        let current= this.head;
        while(current.next  !== this.head){
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
    }
    traverse() {
        if(!this.head) return;
        let current = this.head;
        let result = [];
        do{
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);

        return (result.join('->'))
    }
}
let cll = new CircularLinkedList();

cll.insertEnd(10);
cll.insertEnd(20);
cll.insertEnd(30);
console.log(cll.traverse());
console.log(cll)