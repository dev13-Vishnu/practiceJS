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
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;;
            return;
        }
        this._insert(this.root,newNode);
    }
    _insert(node,newNode) {
        if(node.value > newNode.value) {
            if(!node.left) {
                node.left = newNode;
            } else {
                this._insert(node.left,newNode);
            }
        } else {
            
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insert(node.right,newNode);
            }
        }
    }
    inOrder(node = this.root , result = []) {
        if(node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }
    preOrder(node = this.root, result = []) {
        if(node) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right,result);
        }
        return result;
    }
    postOrder(node = this .root, result = []) {
        if (node) {
            this.postOrder(node.left,result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }

        return result;
    }
    levelOrder(node =this.root ,result = []) {
        if(!node) return;
        let queue = [node];
        while(queue.length > 0) {
            let element = queue.shift();
            result.push(element.value)
            if(element.left) queue.push(element.left)
            if(element.right) queue.push(element.right)
        }
    return result;
    }

}

const bst = new BST();

for(let i = 0; i< 10; i++ ) {
    bst.insert(i);
}

console.log("inOrder:",bst.inOrder());
console.log("preOrder:",bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());