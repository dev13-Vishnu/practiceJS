// Write a program to remove duplicates in a sorted singly linked lis
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function createLinkedList(arr) {
    if(arr.length === 0) {
        console.log("Empty array")
        return;
    }
    const head = new Node (arr[0]);
    let current = head;
    for(let i = 1;i< arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next

    }
    return head;
}

function removeDuplicates(head) {
    let current = head;
    while(current && current.next){
        if(current.value === current.next.value){
            current.next = current.next.next;
        }else {
            current = current.next;
        }
    }
    return head;
}
function printList(head){
    let current = head;
    let result = [];
    while (current){
         result.push(current.value);
         current= current.next
    }
    console.log(result.join('->'));
}

const arr = [1, 1, 2, 3, 3, 4, 4, 5];

let head =createLinkedList(arr);

printList(head);
let removed= removeDuplicates(head);

printList(removed);  