class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right= null
    }
}

class BinaryTree{
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
        const  queue = [this.root];
        while(queue.length>0){
            let current = queue.shift();
            if (!current.left) {
                current.left = newNode;
                return;
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
    inOrder(node = this.root, result = []){
        if(node){
            this.inOrder(node.left,result);
            result.push(node.value);
            this.inOrder(node.right, result)
        }
        return result;
    }
    preOrder(node = this.root, result = []) {
        if(node){
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result)
        }
        return result;
    }
    postOrder(node = this.root,result=[]){
        if(node) {
            this.postOrder(node.left,result);
            this.postOrder(node.right,result);
            result.push(node.value);
        }
        return result;
    }
    height (node = this.root) {
        if(!node) return -1;
        let leftHeight = this.height(node.left);
        let rightHeight= this.height(node.right);
        return Math.max(leftHeight,rightHeight) +1;
    }
    countNodes(node = this.root) {
        if(!node) return 0;
        return this.countNodes(node.left) + this.countNodes(node.right) + 1;
    }
    findMin(node = this.root){
        if(!node) return Infinity;

        let leftMin = this.findMin(node.left);
        let rightMin = this.findMin(node.right);
        return Math.min(node.value, leftMin, rightMin);
    }
    findMax(node = this.root) {
        if(!node) return -Infinity;

        let leftMax = this.findMax(node.left);
        let rightMax =  this.findMax(node.right);
        return Math.max(node.value, leftMax, rightMax);
    }
    isBst(node = this.root, min = -Infinity, max = Infinity) {
        if(!node) return true;
        if(node.value <= min || node.value >= max) return false;

        return this.isBst(node.left, min , node.value) && this.isBst(node.right , node.value, max);
    }
    levelOrder(root= this.root) {
        let result =[];
        if(!root) return [];
        let queue = [root];

        while(queue.length) {
            const level = [];
            const length = queue.length;
            for(let i = 0; i< length; i++ ) {
                const node = queue.shift();
                level.push(node.value);
                if(node.left)  queue.push(node.left);
                if(node.right)  queue.push(node.right);
            }
        result.push(level);

        }
        return result;

    }
    areIdentical(node1 = this.root, node2 = this.root) {
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;

        return node1.value === node2.value && this.areIdentical(node1.left,node2.left) && this.areIdentical(node1.right, node2.right);
    }
    countLeaves(node = this.root) {
        if(!node) return 0;

        if(!node.left && !node.right) return 1;

        return this.countLeaves(node.left) + this.countLeaves(node.right);
    }
    
}

const bt= new BinaryTree();
const bt2 = new BinaryTree();


for(let i =0; i<=10; i++){
    bt.insert(i);
    bt2.insert(i);
}

console.log(bt.inOrder());
console.log(bt.preOrder());
console.log(bt.postOrder());

console.log(bt.height());
console.log(bt.countNodes());
console.log("find",bt.findMin());
console.log("find",bt.findMax());

console.log(bt.isBst());
const bst = new BinaryTree()

const arr  = [8, 4, 12, 2, 6, 10, 14]//BST 


for(let i = 0 ; i< arr.length; i++) {
    bst.insert(arr[i])
}

console.log(bst.isBst());
console.log(bt.levelOrder());
console.log(bst.levelOrder());
console.log(bt.areIdentical(bt.root,bt2.root));
console.log(bst.areIdentical(bst.root,bt2.root));
console.log(bt.countLeaves());
console.log(bt2.countLeaves());
console.log(bst.countLeaves());
