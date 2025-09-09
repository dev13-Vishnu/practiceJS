class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class SLL{
    constructor() {
        this.head = null;
        this.tail= null;
        this.size = 0;
    }
    insertBeginning(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head= this.tail = newNode;
            this.size ++;
            return
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    insertAtEnd(data){
        const newNode = new Node(data);
        if(!this.head) {
            this.head= this.tail = newNode;
            this.size++;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    insertAtposition(data,position){
        if(position<0 || position > this.size){
            console.log("Invalid postion")
            return;
        }
        if(position === 0){
            this.insertBeginning(data);
            return;
        }
        if(position === this.size){
            this.insertAtEnd(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;
        while(count < position -1){
            current= current.next;
            count++
        }
        newNode.next = current.next;
        current.next = newNode
        this.size++
    }
    deleteBeginning() {
        if(this.size === 0){
            console.log("The linkedList is already empty.");
            return;
        }
        if(this.size === 1) {
            this.head= this.tail = null;
            this.size = 0
            return;
        }
        this.head = this.head.next
        this.size--
    }
    deleteEnd(){
        if(this.size ===0){
            console.log("The linked list empty.");
            return;
        }
        if(this.size === 1){
            this.head = this.tail = null;
            
        } else {
            let current = this.head;
            while(current.next !== this.tail) {
                current = current.next;
            }
            current.next = null
            this.tail = current;
        }
        this.size--;
    }
    deletePosition(position) {
        if(position <0 || position > this.size -1){
            console.log("Invalid Position")
            return
        }
        if(position === 0) {
            this.deleteBeginning();
            return;
        }
        if(position=== this.size-1){
            this.deleteEnd();
            return;
        }
        let count = 0;
        let current = this.head;
        while (count < position -1){
            current = current.next 
            count++
        }
        current.next = current.next.next;
        this.size--
    }
    deleteValue(data) {
        if(!this.head){
            console.log("List is empty");
            return;
        }
        if(this.head.data === data) {
            this.deleteBeginning();
            return;
        }
        let current = this.head;
        while(current.next && current.next.data !== data){
            current = current.next;
        }
        if(current.next) {
            current.next = current.next.next;
            this.size--;
        } else{
            console.log("Value not found In list.")
        }
    }
    traverese(){
        if(!this.head) return null
        let current = this.head;
        let result = [];
        while(current) {
             result.push(current.data);
            current = current.next;
        }
        console.log(result.join('->'))
    }
    reverse(){
        if(!this.head) {
            return "Empty Linked List"
        }
        if(this.size ===1) {
        return this.head;
        }
        let current = this.head;
        let prev = null;
        this.tail = this.head
        while (current) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.head = prev;
    }
    
    
}
// Create a new linked list
const list = new SLL();

console.log("=== Insertion Demo ===");
list.insertBeginning(30);   // 30
list.insertBeginning(20);   // 20 -> 30
list.insertAtEnd(40);       // 20 -> 30 -> 40
list.insertAtEnd(50);       // 20 -> 30 -> 40 -> 50
list.insertAtposition(25, 1); // 20 -> 25 -> 30 -> 40 -> 50
list.traverese();
list.reverse(); //50->40->30->25->20


list.traverese();

console.log("\n=== Deletion Demo ===");
list.deleteBeginning(); // delete head →40->30->25->20

list.traverese();

list.deleteEnd();       // delete tail → 40->30->25

list.traverese();

list.deletePosition(1); // delete index 1 (30) →40->25

list.traverese();

list.deleteValue(25);   // delete node with value 25 → 40
list.traverese();

list.deleteValue(100);  // trying to delete non-existing → "Value not found"
list.traverese();

console.log("\n=== Final List ===");
list.traverese();
console.log("Size:", list.size);

