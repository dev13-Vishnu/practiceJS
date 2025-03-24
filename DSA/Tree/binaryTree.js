
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = nullj;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert (value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = new Node;
            return;
        } 
        const queue = [this.root];
        while(queue.length > 0){
            const current = queue.shift();
            if (!current.left) {
                current.left =newNode;
                return
            } else {
                queue.push(current.left);
            }
            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }
    
}