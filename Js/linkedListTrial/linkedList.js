
class Node {
    data = null;
    nextnode = null
    constructor(data) {
        this.data = data
    }
}

class LinkedList {
    root = null
    constructor(node) {
        this.root = node
    }

    add(newNode) {
        let wrappedNode = newNode;
        if (!(newNode instanceof Node)) {
            wrappedNode = new Node(newNode)
        }
        this._addrec(this.root, wrappedNode)
        return this;
    }

    _addrec(rootNode, newNode) {
        if (!rootNode.nextnode) {
            rootNode.nextnode = newNode
            return;
        }
        this._addrec.call(this, rootNode.nextnode, newNode);
    }

    traverse(func) {
        this._traverseRec(this.root, func)
    }

    _traverseRec(rootNode, printFunc) {
        printFunc(rootNode.data)
        if (!rootNode.nextnode) {
            return
        }
        this._traverseRec.call(this, rootNode.nextnode, printFunc)
    }
}

module.exports = {
    LinkedList,
    Node
}