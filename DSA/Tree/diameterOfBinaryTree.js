class TreeNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function diameterOfBinaryTree(root) {
    let maxDiameter = 0;
    function height(node) {
        if(node === null) return -1;
        const left = height(node.left);
        const right = height(node.right);

        maxDiameter = Math.max(maxDiameter,left+ right + 2);
        return 1 + Math.max(left, right);
    }
    height (root);
    return maxDiameter;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);

console.log("Diameter:", diameterOfBinaryTree(root));