// let arr =[1,2,3,4];

// class Node {
//     constructor(value) {
//         this.value= value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if(!this.head) {
//             this.head= newNode;
//             this.tail = newNode;
//             return;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }
//     printList(node = this.head) {
//         let arr = []
//         while(node) {
//             arr.push(node.value);
//             node = node.next;
//         }
//         console.log(arr.join('->'))
//     }

//     findMiddle(node = this.head) {
//         let arr = []
//         while(node) {
//             arr.push(node.value);
//             node = node.next;
//         }
//         return arr[Math.floor((arr.length-1)/2)]
//     }


// }

// let ll = new LinkedList();

// arr.forEach((Element) => ll.insert(Element))

// ll.printList();
// console.log(ll.findMiddle());

// function height(node = this.root) {
//     if()
// }