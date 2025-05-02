class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BT{
    constructor(){
        this.root = null;
    }

    insert (value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        while(queue.length){
            const current = queue.shift();
            if(!current.left) {
                current.left = newNode;
                break;
            } else {
                queue.push(current.left);
            }
            if(!current.right) {
                current.right = newNode;
                break;
            } else {
                queue.push(current.right);
            }
        }
    }
    height(node = this.root) {
        if(!node) return -1;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return 1+Math.max(leftHeight,rightHeight);
    }
}

const tree = new BT();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log(tree.height());