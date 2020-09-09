
function Node(data) {
    this.next = null
    this.data = data
}

var TheLinkedList = function (rt) {
    let self = this;
    this.theroot = rt

    const create = function (data) {
        _create(self.theroot, new Node(data))
        return self
    }
    const traverse = function (callback) {
        _traverse(self.theroot, callback)
        return self
    }

    const count = function () {
        return _count(self.theroot)
    }


    const _find = (theroot, data) => {
        if (theroot.data != data) {
            return _find(theroot.next, data)
        }
        return data
    }

    const _count = (theroot) => {
        if (!theroot.next) return 1
        return _count(theroot.next) + 1
    }

    const _create = (theroot, newNode) => {
        if (theroot.next) return _create(theroot.next, newNode)
        theroot.next = newNode
    }
    const _traverse = (theroot, callback) => {
        var current = theroot
        do {
            callback(current.data)
            current = current.next
        } while (current)
    }
    return Object.assign(self, { create, count }, { traverse })
}

let list = TheLinkedList(new Node("Baraa"))

list.create("Mirghani")
list.create("Mohamed").create("abuzaid")

list.traverse((data) => {
    console.log(data)
})

console.log(list.count())