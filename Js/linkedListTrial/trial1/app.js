class Node {
    data = null
    next = null
    constructor(data) {
        this.data = data
    }
}

class LinkedList {

    root = null
    constructor(root) {
        this.root = root
    }

    add(data) {
        return this._add(this.root, new Node(data))
    }

    _add(root, newNode) {
        if (!root.next) return root.next = newNode
        return this._add(root.next, newNode)
    }


    log(reverse) {
        console.log("----------------")
        if (reverse) return this._reverseLog(this.root)
        this._log(this.root)
    }

    _log(root) {
        console.log(root.data)
        if (!root.next) return;
        return this._log(root.next)
    }

    _reverseLog(root) {
        if (!root.next) return;
        this._log(root.next)
        console.log(root.data)
    }

    find(key) {
        return this._find(this.root, null, key)
    }

    _find(node, prevNode, key) {
        if (!node.next) return -1;

        if (key == node.data) {
            prevNode.next = node.next
            node.next = this.root
            this.root = node
            return key;
        }
        return this._find(node.next, node, key)
    }

}



const list = new LinkedList(new Node("baraa"))
list.add("Mirghani")
list.add("Mohamed")
list.add("Abuzaid")

list.log(true)

// list.find("Mirghani")
// list.log()