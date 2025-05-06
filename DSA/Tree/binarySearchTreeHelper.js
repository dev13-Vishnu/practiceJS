class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root =this. _insertHelper(this.root, value);
    }
    _insertHelper(node,value) {
        if( !node) return new Node(value);

        if(value < node.value) {
            node.left = this._insertHelper(node.left,value);
        } else if( value > node.value) {
            node.right = this._insertHelper(node.right, value);
        }
        return node;
    }
    search(value) {
        return this._searchHelper(this.root,value)
    }
    _searchHelper(node, value){
        if(!node) return false;
        if(node.value === value) return true;

        return value < node.value ? this._searchHelper(node.left, value) : this._searchHelper(node.right,value);
    }
    delete(value) {
        this.root = this._deleteHelper(this.root, value);
    }
    _deleteHelper(node, value) {
        if(!node) return null;
        if(value< node.value) {
            node.left = this._deleteHelper(node.left, value)
        } else if(value > node.value) {
            node.right = this._deleteHelper(node.right,value);
        } else {
            if(!node.right) return node.left;
            if(!node.left) return node.right;

            let successor = this._minValueNode(node.right);
            node.value = successor.value;
            node.right = this. _deleteHelper(node.right, successor.value);
        }
        return node;
    }
    _minValueNode(node){
        while(node.left){
            node = node.left
        }
        return node;
    }
    inOrder() {
        this._inOrderHelper(this.root);
    }
    _inOrderHelper(node) {
        if(!node) return;
            this._inOrderHelper(node.left);
            console.log(node.value);
            this._inOrderHelper(node.right);
        
    }
}

const bst = new BST();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Bst Inorder");
bst.inOrder();
console.log("Search 40:",bst.search(40));
console.log("Search 100:", bst.search(100));

bst.delete(70);
console.log("Afterd deleting 70:");

bst.inOrder();