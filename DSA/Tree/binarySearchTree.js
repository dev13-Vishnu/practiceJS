class Node{
    constructor(value) {
        this.value = value,
        this.left =null,
        this.right = null
    }

}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
        this._insertNode(this.root,newNode);
         
    }

    _insertNode(node,newNode) {
        if (node.value > newNode.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left,newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this._insertNode(node.right, newNode);
            }
        }   
    }
    inOrder(node= this.root, result = []) {
        if(node) {
            this.inOrder(node.left,result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
    isBst(node = this.root, min = -Infinity, max = Infinity) {
        if(!node) return true;
        if(node.value < min || node.value > max) return false;

        return this.isBst(node.left,min,node.value) && this.isBst(node.right, node.value , max)
    }
}


const bst = new BinarySearchTree();
const bst1 = new BinarySearchTree();


[4, 2, 6, 1, 3, 5, 7, 0, 8, 9].forEach(element => bst1.insert(element));

for(let i = 0; i< 10;i++) {
    bst.insert(i);
}

console.log(bst.inOrder());
console.log(bst1.inOrder());
console.log(bst.isBst());
console.log(bst1.isBst());