/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const res = (+traverse(l1)) + (+traverse(l2));
    const resArr = res.toString().split('').reverse();
    console.log(resArr)
    let resNode = null;
    let root = null

    for (let x = 0; x < resArr.length; x++) {
        console.log(resArr[x])
        if (x == 0) {
            root = add(root, resArr[x])
            resNode = root;
        } else {
            resNode = add(resNode, resArr[x])
        }

    }
    return root;
};


function add(node, val) {
    if (node == null) {
        return {
            val,
            next: null
        }
    } else if (node.next == null) {
        node.next = {
            val,
            next: null
        }
        return node
    }
    return add(node.next, val)
}

function traverse(node) {
    if (node.next == null)
        return node.val;
    return traverse(node.next) + node.val.toString();
}

