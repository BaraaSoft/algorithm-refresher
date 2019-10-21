
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
        if (!(newNode instanceof Node)) wrappedNode = new Node(newNode)
        this._addrec(this.root, wrappedNode)
        return this;
    }

    traverse(func) {
        this._traverseRec(this.root, func)
    }

    _addrec(rootNode, newNode) {
        if (!rootNode.nextnode) return rootNode.nextnode = newNode;
        this._addrec.call(this, rootNode.nextnode, newNode);
    }

    _traverseRec(rootNode, printFunc) {
        printFunc(rootNode.data, rootNode)
        if (!rootNode.nextnode) return;
        this._traverseRec.call(this, rootNode.nextnode, printFunc)
    }
}

module.exports = {
    LinkedList,
    Node
}