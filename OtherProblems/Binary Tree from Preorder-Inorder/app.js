// 105.Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


var buildTree = function (preorder, inorder) {

    return build(preorder, inorder)


};

const build = (preorder, inorder) => {
    if (preorder.length < 1 || inorder.length < 1) return null;
    const index = inorder.indexOf(preorder[0])
    const leftInorder = inorder.slice(0, index);
    const rightInorder = inorder.slice(index + 1);
    let node = new TreeNode(preorder[0])
    node.left = build(preorder.slice(1, index + 1), leftInorder);
    node.right = build(preorder.slice(index + 1), rightInorder);

    return node
}


// let px = 0;
//   function helper(start, end) {
//     if (start >= end) {
//       return null;
//     }
//     let rootIdx = inorder.indexOf(preorder[px]);
//     const n = new TreeNode(preorder[px]);
//     px++
//     n.left = helper(start, rootIdx);
//     n.right = helper(rootIdx + 1, end);
//     return n;
//   }
//   return helper(0, preorder.length);


