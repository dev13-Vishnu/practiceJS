class Node{
    constructor(value){
        this.value = value;
        this.next =  null;
    }
}

function createLinkedList(arr) {
     if(arr.length === 0 ) {
        return null;
     }
     
     let head = new Node(arr[0]);
     let current = head;

     for(let i= 1; i< arr.length; i++){
        current.next = new Node(arr[i]);
        current = current.next;
     }
     return head;
}

function findMiddle(head) {
    let fast = head;
    let slow = head;

    while (fast != null && fast.next !=null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

let arr = [ 1, 2, 3, 4, 5] 
let head =  createLinkedList(arr);

console.log(findMiddle(head));