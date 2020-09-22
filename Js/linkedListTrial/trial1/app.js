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


    reverse() {
        this._reverse(this.root, null)
    }


    _reverse(currNode, prevNode) {
        if (!currNode) return this.root = prevNode
        this._reverse(currNode.next, currNode)
        currNode.next = prevNode
    }

    //     if(currNode != null) {
    //     this._reverse(currNode.next, currNode)
    //     currNode.next = prevNode
    // } else {
    //     this.root = prevNode;
    // }


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


    _isLoop(node) {
        let q = node, p = node;
        do {
            q = q.next
            q = q ? q.next : q
        } while (q && p && q != p);
        if (q == p) return true
        else return false
    }

    _merge(first, second) {
        let third, last;
        if (first.data < second.data) {
            last = third = first;
            first = first.next
            last.next = null
        } else {
            last = third = second
            second = second.next
            last.next = null
        }

        while (first && second) {
            if (first.data < second.data) {
                last.next = first
                last = first
                first = first.next
                last.next = null
            } else {
                last.next = second
                last = second
                second = second.next
                last.next = null
            }
        }

        if (first) {
            last.next = first
        } else {
            last.next = second
        }
    }


}



const list = new LinkedList(new Node("baraa"))
list.add("Mirghani")
list.add("Mohamed")
list.add("Abuzaid")

list.log()
list.reverse()
list.log()

// list.find("Mirghani")
// list.log()