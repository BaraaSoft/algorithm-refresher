let theTree = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
function Node(val, left, right) {
    return { val, left, right }
}


function serialize(root) {
    let queue = [root]
    let result = ""
    while (queue.length != 0) {
        let node = queue.shift()
        if (node != null) {
            result += node.val.toString()
            queue.push(node.left)
            queue.push(node.right)
        } else {
            result += "X"
        }
    }
    return result
}



function create(arr) {

    let root = Node(arr[0])
    let queue = [root]
    let i = 1, len = arr.length;
    while (queue.length != 0) {
        let theroot = queue.shift()
        if (i < len) {
            let val = arr[i++]
            if (val != null) {
                let node = Node(val)
                theroot.left = node
                queue.push(node)
            } else {
                theroot.left = null
            }

        }
        if (i < len) {
            let val = arr[i++]
            if (val != null) {
                let node = Node(val)
                theroot.right = node
                queue.push(node)
            } else {
                theroot.right = null
            }

        }
    }

    return root
}

function height(root) {
    if (root == null) return 0;
    return Math.max(height(root.left), height(root.right)) + 1
}

function isBlanced(root) {

    if (root == null) return true;

    let left = height(root.left)
    let right = height(root.right)
    let diff = Math.abs(left - right)

    return (diff <= 1) && isBlanced(root.left) && isBlanced(root.right)

}

function isBlance(root) {
    if (root == null) return 0;

    let left = isBlance(root.left)
    if (left == -1) return -1
    let right = isBlance(root.right)
    if (right == -1) return -1
    if (Math.abs(left - right) > 1) return -1
    return Math.max(left, right) + 1
}

let rt = create(theTree)
//console.log(JSON.stringify(rt, null, 2))

//console.log(serialize(rt))

let rt1 = Node(10);
let rt2 = Node(5);
let rt3 = Node(3)
let rt4 = Node(4);
let rt5 = Node(5)

rt1.left = rt2;
rt1.right = rt3;
rt3.left = rt4
rt4.left = rt5


console.log(isBlance(rt))