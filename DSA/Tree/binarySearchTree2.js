class Node{
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
        const newNode =new Node(value);
        if(!this.root) {
            this.root = newNode;
            return
        }
        let current = this.root
        while(true) {
            if(value < current.value) {
                if(!current.left) {
                    current.left = newNode;
                    return;
                }
                current= current.left;
            } else {
                if(!current.right) {
                    current.right = newNode;
                    return;
                }
                current= current.right;
            }
        }
    }
    insertRec(value) {
            this.root = this._insertRec(this.root, value);
    }
    _insertRec(node, value) {
        if(node === null) {
            return new Node(value);
        }
        if(value < node.value) {
            node.left = this._insertRec(node.left, value);
        } else if(value > node.value){
            node.right = this._insertRec(node.right, value);
        }
        return node;
    }
    inorder(node= this.root,result= []) {
        if(node)  { 
            this.inorder(node.left,result)
            result.push(node.value);
            this.inorder(node.right, result);
        }
        return (result.join(','));
    }
    delete(value) {
        this.root = this._deleteRec(this.root,value)
    }
    _deleteRec(node,value){
        if(!node) return null;
        if(value < node.value) {
            node.left = this._deleteRec(node.left,value);
        } else if( value > node.value) {
            node.right = this._deleteRec(node.right, value);
        } else {
            if(!node.left && !node.right) return null;
            if(!node.left ) return node.right;
            if(!node.right) return node.left;

            let successor = this._minimumValueNode(node.right)
            node.value = successor.value;
            node.right = this._deleteRec(node.right, successor.value);
        }
        return node
    }
    _minimumValueNode(node) {
        let current = node ;
        while (current.left) {
            current = current .left
        }
        return current;
    }
    deleteIter(value) {
        let parent = null, current = this.root;
        while(current && current.value !== value){
            parent = current;
            current = value < current.value? current.left: current.right;
        }
        if(!current) return;
        if(!current.left && !current.right) {
            this._replaceChild(parent, current, null);
        } else if(!current.left || !current.right){
            let child = current.left || current.right;
            this._replaceChild(parent, current,child)
        } else {
            let succParent = current, succ= current.right;
            while(succ.left){
                succParent = succ;
                succ = succ.left;
            }
            current.value = succ.value;
            this._replaceChild(succParent, succ, succ.right);
        }
    }
    _replaceChild(parent, succ, newChild) {
        if(!parent){
            this.root= newChild;
        } else if( parent.left === succ){
            parent.left = newChild;
        } else {
            parent.right = newChild;
        }
    }

}


const bst = new BST();

// Iterative inserts
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

// Recursive inserts
bst.insertRec(12);
bst.insertRec(20);

console.log("Inorder Traversal (should be sorted):");
console.log(bst.inorder());  // Expected: 2, 5, 7, 10, 12, 15, 20

bst.delete(15); // deleting a node with two children


console.log("After deleting 15 (inorder):");
console.log(bst.inorder()); // 2 5 7 10 12 20
bst.deleteIter(10)
console.log("After deleting 10 (inorder):");
console.log(bst.inorder()); // 2 5 7 12 20
