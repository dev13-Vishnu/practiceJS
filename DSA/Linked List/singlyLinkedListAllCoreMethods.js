class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    insertAtEnd(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next) {
            current= current.next;
        }
        current.next = newNode;
    }
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtIndex(index, data){
        if(index < 0) return;
        if(index ===0) {
            this.insertAtBeginning(data);
            return;
        }
        let count =0;
        const newNode = new Node(data);
        let current = this.head;
        while(current && count < index -1) {
            current = current.next;
            count++
        }
        if(!current) return console.log("Index out of bounds.");
        newNode.next = current.next
        current.next = newNode;

    }
    deleteFromBeginning(){
        if(!this.head) return;
        let removed = this.head.data;
        this.head = this.head.next;
        return removed;

    }
    deleteFromEnd(){
        if(!this.head) return;
        if(!this.head.next){
            const removed = this.head.data;
            this.head = null;
            return removed;
        }
        let current = this. head;
        while(current.next.next){
            current = current.next;

        }
        current.next = null;
    }
    deleteAtIndex(index){
        if(index < 0 || !this.head) return;
        if(index ===1) this.deleteFromBeginning();
    }
    search(value){
        let current = this.head;
        while(current) {
            if (current.data === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    length(){
        if (!this.head) return 0;
        let current = this.head;
        let count = 0;
        while(current){
            count ++; 
            current = current.next
        }
        return count;
    }
    reverseIterative(){
        let prev = null
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    reverseRecursive(node = this.head){
        if (!node || !node.next) {
            this.head = node;
            return node;
          }
      
          let newHead = this.reverseRecursive(node.next);
          node.next.next = node;
          node.next = null;
          return newHead;
    }
    print(){
        let curr = this.head;
        let listStr = "Head->";
        while(curr) {
            listStr +=curr.data +'->'
            curr = curr.next;
        }
        console.log(listStr + "null"
        )
    }
}
const ll = new LinkedList();

ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtBeginning(5);
ll.insertAtIndex(15, 2);
ll.print(); // Head -> 5 -> 10 -> 15 -> 20 -> 30 -> null

ll.deleteFromBeginning();
ll.deleteFromEnd();
ll.deleteAtIndex(1);
ll.print(); // Head -> 10 -> 20 -> null

console.log("Length:", ll.length()); // 2
console.log("Search 20:", ll.search(20)); // true
console.log("Search 100:", ll.search(100)); // false

ll.reverseIterative();
ll.print(); // Head -> 20 -> 10 -> null

ll.reverseRecursive();
ll.print(); // Head -> 10 -> 20 -> null
