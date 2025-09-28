class Node{
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree{
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode  = new Node(value);
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
            }else{
                queue.push(current.left);
            }
            if(!current.right) {
                current.right = newNode;
                return
            } else {
                queue.push(current.right);
            }
        }
    }
    inorder(node = this.root, result = []){
        if(node) {
            this.inorder(node.left,result);
            result.push(node.value)
            this.inorder(node.right,result)
        }
        return result.join(',');
    }
    preorder(node = this.root,result= []){
        if(node) {
            result.push(node.value);
            this.preorder(node.left,result);
            this.preorder(node.right,result);
        }
        return result.join(',')
    }
    postorder(node=this.root, result= []){
        if(node) {
            this.postorder(node.left,result);
            this.postorder(node.right,result);
            result.push(node.value);
        }
        return result.join(',');
    }
    levelOrder() {
        if(!this.root) return "";
        const queue = [this.root];
        const result = [];
        while(queue.length) {
            let current  = queue.shift();
            result.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return result.join(",");
    }
    countNodes(node = this.root) {
        if(!node) return 0;
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
    countLeafNodes(node = this.root) {
        if(!node) return 0;
        if(!node.left && !node.right) return 1;
        return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
    }
    height(node = this.root) {
        if(!node) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
    depth(value, node = this.root, currentDepth = 0) {
        if(!node) return -1;
        if(node.value  === value) return currentDepth;

        let left = this.depth(value, node.left, currentDepth + 1)
        if(left === -1) return left;

        return this.depth(value, node.right,currentDepth +1);
    }
}


const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log("Inorder Traversal:",tree.inorder());
console.log("Preorder Traversal:",tree.preorder());
console.log("Postorder Traversal:",tree.postorder());
console.log("Level Order Traversal:", tree.levelOrder());
console.log("Total Nodes:", tree.countNodes());     // 5
console.log("Leaf Nodes:", tree.countLeafNodes()); // 3 (nodes 4,5,3)
