// https://leetcode.com/problems/odd-even-linked-list/


var oddEvenList = function (head) {
    let sortedOddEvenArr = sort(head, 1)
    return create(head, sortedOddEvenArr)
};

function sort(node, n, res = []) {
    if (node == null) return []
    if (n % 2 == 0) {
        res.push(node.val)
        sort(node.next, n + 1, res)
    } else {
        sort(node.next, n + 1, res)
        res.unshift(node.val)
    }
    return res;
}

function create(head, arr) {
    let node = head;
    let i = 0
    while (node) {
        node.val = arr[i++]
        node = node.next
    }
    return head
}
