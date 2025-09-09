class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLL (head){
    let current = head;
    let next = null 
    let prev = null
    while (current) {
        next = current.next;
        current.next = prev;
        prev= current;
        current  = next;
    }
    return prev
}
function printLL (head){
    let current = head;
    let result = [];
    while(current){
        result.push(current.data);
        current= current.next;
    }
    return result.join('->');
}

let node = new Node( 1);
 node.next = new Node(2);
 node.next.next = new Node(3);
 
 console.log(printLL(node));
let reverseNode = reverseLL(node);

console.log(printLL(reverseNode));