
function Node(val, next, prev) {
    this.val = val
    this.next = next;
    this.prev = prev;
}

class LinkedList {
    constructor(root) {
        this.root = root
        this.tail = root
    }


    deleteNode(data) {
        let nodeToDelete = this.find(data)
        if (!nodeToDelete) return;

        let nextNode = nodeToDelete.next || null;
        let prevNode = nodeToDelete.prev || null;

        // case: deleting the tail node
        if (!nextNode) {
            this.tail = prevNode
            prevNode.next = null
            nodeToDelete.next = null;
            nodeToDelete.prev = null;

            return this
        }

        // case: deleting the head
        if (!prevNode) {
            this.root = nextNode;
            nextNode.prev = null
            nodeToDelete.next = null;
            nodeToDelete.prev = null;
            return this
        }


        // case: deteting middle node
        nodeToDelete.next = null;
        nodeToDelete.prev = null;
        nextNode.prev = prevNode;
        prevNode.next = nextNode
        return this;
    }

    find(val) {
        let target = null;
        this._traverse(this.root, (node) => {
            if (node.val == val) target = node
        })
        return target
    }

    insertAtTail(data) {
        if (data == null || data === undefined) throw new Error('Error: Data is required!');
        let newNode = new Node(data)
        newNode.prev = this.getTail()
        this.getTail().next = newNode;
        this.tail = newNode
        return this
    }

    getRoot() {
        return this.root;
    }
    getTail() {
        return this.tail
    }

    printAll() {
        this._traverse(this.root, (node) => console.log(node.val))
    }

    insertAtHead(data) {
        if (data == null || data === undefined) throw new Error('Error: Data is required!');
        let newNode = new Node(data)
        this.getRoot().prev = newNode
        newNode.next = this.getRoot();
        this.root = newNode
        return this;
    }


    _append(node, newNode) {
        if (!node) {
            this.tail = newNode;
            newNode.prev = node
            return newNode
        };
        node.next = this._append(node.next, newNode)
        return node;
    }
    _traverse(node, func) {
        if (!node) return;
        func.call(this, node);
        this._traverse(node.next, func)
        return;
    }

}


const linkedlist = new LinkedList(new Node("baraa"))

// insert at tail
linkedlist
    .insertAtTail('Mirghani')
    .insertAtTail('Mohamed')
// display all the elements on the linkedList  
linkedlist.printAll()

// insert at head
linkedlist
    .insertAtHead('My Name is:')
    .printAll()



// search value not in the linkedList
console.log(linkedlist.find('Ali'))

// find node in the linkedList
console.log(linkedlist.find('Mirghani').val);

// delete node  on midddle
linkedlist
    .deleteNode('Mirghani')
    .printAll()

// delete the tail
linkedlist.deleteNode('Mohamed').printAll()



