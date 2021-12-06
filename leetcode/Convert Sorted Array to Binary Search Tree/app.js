/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return build(nums)
};

const build = (nums) => {
    if (nums.length < 1) return null
    const mid = Math.floor(nums.length / 2)
    let treeNode = new TreeNode(nums[mid])

    treeNode.left = build(nums.slice(0, mid))
    treeNode.right = build(nums.slice(mid + 1))
    return treeNode
}


const find = (node,target)=>{
    if(node.val == target) return target;
    if(target < node.left)
}