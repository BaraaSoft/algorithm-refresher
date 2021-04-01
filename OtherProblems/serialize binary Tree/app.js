
let theTree = "12xx34xx5xx";

let Node = function (val, left, right) { return { val, left, right } }

// 
// function deserailize(str, n = 0) {
//     if (str[n] == 'x') return null;
//     let node = Node(str[n], deserailize(str, n + 1), deserailize(str, n + 2))
//     return node
// }

function deserailize(queue) {
    let val = queue.shift()
    if (val == 'x') return null;
    let node = Node(val, deserailize(queue), deserailize(queue))
    return node
}

function serialize(node) {
    if (node == null) return "x"
    return node.val + "," + serialize(node.left) + "," + serialize(node.right)
}


function traverse(node) {
    console.log(node.val)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
}


let root = deserailize(theTree.split(""))
traverse(root)
console.log(">> serialize: ", serialize(root))


