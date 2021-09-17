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
var postorderTraversal = function(root) {
    const result = [];
    const stack = [];
    while (root || stack.length) {
        while (root.left) {
            stack.push(root);
            root = root.left;
        }
        if (root.right) {
            const tmp = root.right;
            root.right = null;
            stack.push(root);
            root = tmp;
        } else {
            result.push(root.val);
            root = stack.pop();
            if (root) root.left = null;
        }
    }
    return result;
};
