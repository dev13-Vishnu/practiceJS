class Node {
    constructor(value) {
        this.value = value;
        this. left = null;
        this. right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;

    }

    insert (value) {
        this.root =  this._insert(this.root, value);
    }
    _insert(node, value) {
        if(!node) return new Node(value);

        if(value < node.value) node.left = this._insert(node.left, value);
        if(value > node.value) node.right = this._insert(node.right,value);

        return node;
    }
    getSortedElements() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }
    _inOrder(node,result) {
        if(!node) return;
        this._inOrder(node.left,result);
        result.push(node.value);
        this._inOrder(node.right,result);
    }
    getSecondMinMaxSum(){
        const sorted = this.getSortedElements();
        if(sorted.length <2) return null;
        const secondMin = sorted[1];
        const secondMax = sorted[sorted.length-2];

        return secondMax + secondMin;
    }
}

const bst = new Bst();

[50, 30, 70, 20, 40, 60, 80].forEach(elemet=>bst.insert(elemet));

console.log("sorted:",bst.getSortedElements());

console.log(bst.getSecondMinMaxSum());
