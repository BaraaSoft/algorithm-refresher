function Node(data) {
    this.next = null;
    this.data = data;
}

const LinkedList = function (rt) {
    this.roots = rt;
    let self = this;

    function setRoot(nodz) {
        self.roots = nodz;
    }

    const create = function (data) {
        createPr(this.roots, new Node(data));
    }

    const traverse = () => {
        return new Promise((resolve, reject) => {
            traversePr(this.roots, [], (data) => {
                if (data) resolve(data)
            })
        })
    }

    const traversePr = function (theRoot, result, callback) {
        if (!theRoot.next) return callback([...result, theRoot.data]);
        traversePr(theRoot.next, [...result, theRoot.data], callback)
    }
    const createPr = function (theRoot, newNode) {
        if (theRoot.next != null) return createPr(theRoot.next, newNode)
        theRoot.next = newNode;
    }

    return {
        setRoot: setRoot.bind(this),
        traverse: traverse.bind(this),
        create: create.bind(this)
    }

}


const myLinkedList = LinkedList(new Node(10));
myLinkedList.setRoot(new Node(23));
myLinkedList.create(11)
myLinkedList.create(7)
myLinkedList.create(9)

myLinkedList.traverse().then(console.log)
//console.log(myLinkedList.traverse())

