/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];    
    while (root) {
        while (root.left) {
            stack.push(root);
            root = root.left;
        }
        result.push(root.val);

        if (root.right) {
            root = root.right;
        } else {
            root = stack.pop();
            if (root) root.left = null;
        }
    }
    
    return result;
};
