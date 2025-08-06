class Node{
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtBeginning(data){
        const newNode = new Node(data);
        if(!this.head) {
            this.head= this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    insertAtTail(data){
        const newNode = new Node(data);
        if(!this.tail) {
            this.tail = this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    insertAtPosition(data, index) {
        if (index < 0) return;
      
        if (!this.head|| index === 0) return this.insertAtBeginning(data);
      
        let current = this.head;
        let count = 0;
      
        while (current && count < index) {
          current = current.next;
          count++;
        }
      
        if (!current) return this.insertAtTail(data); // out of bounds
      
        const newNode = new Node(data);
        newNode.prev = current.prev;
        newNode.next = current;
      
        current.prev.next = newNode; // ✅ guaranteed to exist
        current.prev = newNode;
      }
      
    deleteFromHead(){
        if(!this.head) return;
        if(this.head === this.tail) {
            this.head= this.tail = null;
        } else {
        this.head = this.head.next;
        this.head.prev = null;

        }
    }
    deleteFromTail(){
        if(!this.head) return;
        if(this.head === this.tail){
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } 
    }
    deleteAtPostion(index){
        if(index<0) return "The position is out of bounds";
        if(index ===0) return this.deleteFromHead();
        let current = this.head;
        let count = 0;
        while(current && count < index){
            current = current.next;
            count ++;
        }
        if(!current) return console.log(" Index is out of bounds");
        if(current.prev) current.prev.next = current.next;
        if(current.next) current.next.prev = current.prev;
        if(current === this.tail) this.tail = current.prev;
    }
    traverseForward(){
        let current = this.head
        let result = "head->";
        while(current) {
            result+=current.data + '<->';
            current = current.next;
        }
        console.log(result + "null")
    }
    traverseBackward(){
        let current  = this.tail;
        let result = 'tail->';
        while (current) {
            result += current.data +'<->';
            current = current.prev;
        }
        console.log(result+'null');
    }
    reverse() {
        let curr = this.head;
        let temp = null;
    
        while (curr) {
          // Swap prev and next
          temp = curr.prev;
          curr.prev = curr.next;
          curr.next = temp;
    
          // Move to next (which is prev now)
          curr = curr.prev;
        }
    
        // After full reversal, swap head and tail
        if (temp) {
          this.head = temp.prev;
        }
      }
    }

    const dll = new DoublyLinkedList();

dll.insertAtBeginning(10);
dll.insertAtTail(20);
dll.insertAtTail(30);
dll.insertAtPosition(15, 1);

dll.traverseForward();   // Head -> 10 <-> 15 <-> 20 <-> 30 <-> null
dll.traverseBackward();  // Tail -> 30 <-> 20 <-> 15 <-> 10 <-> null

dll.deleteFromHead();
dll.deleteFromTail();
dll.deleteAtPostion(1);

dll.traverseForward();   // Head -> 15 <-> null

dll.reverse();
dll.traverseForward();   // Head -> 15 <-> null
