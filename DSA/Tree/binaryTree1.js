class Node{
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BT{
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return;
        }
        const queue = [this.root];

        while(queue.length) {
            let current = queue.shift();
            if(!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }
            if(!current.right) {
                current.right = newNode;
                return;     
            } else {
                queue.push(current.right);
            }
        }
    }
    inOrder(node=this.root ) {
       if(node) {this.inOrder(node.left );
        console.log("inOrder:",node.value);
        this.inOrder(node.right)};
    }
    preOrder(node= this.root) {
        if(node) {
            console.log("preOrder:",node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    levelOrder() {
        let queue = [this.root];
        while(queue.length) {
            let current = queue.shift();
            console.log(current.value);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
}

const tree = new BT();
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)

tree.inOrder();
tree.preOrder();