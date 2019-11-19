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
    const find = (key) => this.roots = _find(this.roots, this.roots, null, key);

    const _find = function (root, current, last, key) {
        if (!current) {
            return null;
        }

        if (current.data.key == key) {
            last.next = current.next;
            current.next = root;
            return current;
        }

        return _find(root, current.next, current, key);
    }

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
        reverse: reverse.bind(this),
        find: find.bind(this)
    }

}


const myLinkedList = LinkedList(new Node({ key: 10, name: 'baraa' }));
myLinkedList.setRoot(new Node({ key: 23, name: 'jobs' }));
myLinkedList.create({ key: 11, name: 'john' })
myLinkedList.create({ key: 7, name: 'Doe' })
myLinkedList.create({ key: 3, name: 'rose' })

//myLinkedList.traverse().then(console.log);
console.log(myLinkedList.find(7))
console.log(myLinkedList.find(11))
console.log(myLinkedList.traverse())

