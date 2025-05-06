class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return;
        } else {
            this._insertNode(this.root, newNode);
        }
    }
    _insertNode(node, newNode) {
        if(newNode.value < node.value){
            if(!node.left) {
                node.left = newNode;
                return;
            } else {
                this._insertNode(node.left,newNode);
            }
        } else {
            if(!node.right) {
            node.right = newNode;
            return;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
        
    }
    inOrder(node = this.root) {
        if(node) {
            this.inOrder(this.inOrder(node.left))
            console.log("inOrder:",node.value);
            this.inOrder(this.inOrder(node.right));
        }
    }
}