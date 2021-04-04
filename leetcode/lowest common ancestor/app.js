let theTree = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]

let Node = function (val, left, right) { return { val, left, right } }


/* creating blance Binary tree */
function bst(arr, start, end) {
    if (start < end) return null;
    let mid = (start + end) / 2;
    let node = Node(arr[mid], bst(arr, start, mid - 1), bst(arr, mid + 1, end))
    return node
}


function deserailize(arr, i) {
    let val = arr[i - 1]
    if (val == null) return null;
    let l = (i * 2)
    let r = (i * 2) + 1
    let node = Node(val)
    node.left = deserailize(arr, l);
    node.right = deserailize(arr, r)

    return node
}



let root = deserailize(theTree, 1)


function traverse(node) {
    console.log(node.val)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
}




function lowestCommon(root, q, p) {
    if (root == null) return null;
    if (root.val == q || root.val == p) return root
    let left = lowestCommon(root.left, q, p)
    let right = lowestCommon(root.right, q, p)

    if (left == null) return right
    if (right == null) return left
    return root
}
//console.log(JSON.stringify(root, null, 2))
// traverse(root)





console.log(lowestCommon(root, 6, 8).val)

// console.log(serialize(root))


