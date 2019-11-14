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
        _create(this.roots, new Node(data));
    }

    const traverse = () => {
        return new Promise((resolve, reject) => {
            _traverse(this.roots, [], (data) => {
                if (data) resolve(data)
            })
        })
    }

    const max = () => _max(this.roots);
    const min = () => _min(this.roots);


    const reverse = () => _reverse(this.roots);

    const _reverse = function (node) {
        if (!node) return [];
        return [..._reverse(node.next), node.data]
    }
    const _max = function (node) {
        if (!node) return Number.MIN_SAFE_INTEGER;
        let maxValue = _max(node.next);
        return maxValue > node.data ? maxValue : node.data;
    }

    const _min = function (node) {
        if (!node) return Number.MAX_SAFE_INTEGER;
        let minValue = _min(node.next);
        return minValue < node.data ? minValue : node.data;
    }

    const _traverse = function (theRoot, result, callback) {
        if (!theRoot.next) return callback([...result, theRoot.data]);
        _traverse(theRoot.next, [...result, theRoot.data], callback)
    }
    const _create = function (theRoot, newNode) {
        if (theRoot.next != null) return _create(theRoot.next, newNode)
        theRoot.next = newNode;
    }

    return {
        setRoot: setRoot.bind(this),
        traverse: traverse.bind(this),
        create: create.bind(this),
        reverse: reverse.bind(this)
    }

}


const myLinkedList = LinkedList(new Node(10));
myLinkedList.setRoot(new Node(23));
myLinkedList.create(11)
myLinkedList.create(7)
myLinkedList.create(9)

myLinkedList.traverse().then(console.log);
console.log(myLinkedList.reverse())

