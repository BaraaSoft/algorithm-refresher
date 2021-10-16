
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var buildTree = function (preorder, inorder) {
    //console.log(constr(preorder,inorder))
    return constr(preorder, inorder);
};

const constr = (pre, ino) => {
    if (ino.length < 1 || !pre[0]) return null

    let mid = ino.indexOf(pre[0])
    let preO = pre.slice(1)
    let leftTree = ino.slice(0, mid)
    let rightTree = ino.slice(mid + 1)
    // console.log({leftTree,pre:pre[0],rightTree})
    // console.log({preO:preO})
    // console.log({preO2:preO.slice(1)})
    let preO2 = preO.slice(1).length < 1 ? preO : preO.slice(1)
    return new TreeNode(pre[0], constr(preO, leftTree), constr(preO2, rightTree))

}


console.log(buildTree([1,2,3],[1,2,3]))