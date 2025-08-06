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
    search(value){
        let current = this.root;
        while(current){
            if(value === current.value){
                return true;
            }
            current = value < current.value? current.left:current.right;
        }
        return false;
    }
    maxValue(node= this.root){
        if(!node) return null;
        while(node.right){
            node = node.right;
        }
        return node.value;
    }
    minValue(node= this.root){
        if(!node) return null;
        while(node.left){
            node = node.left;
        }
        return node.value;
    }
    delete(value,node =this.root){
        if(!node) return null;
        if(value< node.value){
            node.left = this.delete (value, node.left);
        } else if (value > node.value){
            node.right = this.delete(value, node.right)
        } else {
            if(!node.left && !node.right) return null;
            if(!node.left ) return node.right;
            if(!node.right) return node.left;
            
            const  minRight = this.minValueNode(node.right);
            node.value = minRight.value;
            node.right = this.delete(minRight.value, node.right);
        }
        return node; 
    }
    minValueNode(node){
        while(node.left){
            node = nodeleft;
        }
        return node;
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
console.log(bst.minValue());
console.log(bst.maxValue());