


function Nodes(data, next = null) {
    return {
        data,
        next
    }
}


function create(arr) {
    let root = Nodes(arr[0])

    let node = root;
    for (let i = 1; i < arr.length; i++) {
        let newNode = Nodes(arr[i])
        node.next = newNode
        node = newNode
    }

    return root;
}


function traverse(node) {
    if (node == null) return;
    console.log(">>", node.data)
    traverse(node.next)

}

// function isLoop(rootNode) {
//     let node = rootNode;
//     let nextNode = node;
//     do {
//         if (node == null) return false;
//         node = node.next

//         if (node)
//             nextNode = node.next.next;

//         if (node == nextNode) return true
//         console.log(node.data + " - ", nextNode.data)

//     } while (nextNode)

//     return false;

// }

function isLoop(rootNode) {
    let node = rootNode;
    let nextNode = node;
    do {
        node = node.next;
        nextNode = node.next


        nextNode = nextNode != null ? nextNode.next : null
        if (node == nextNode) return true
    } while (nextNode)

    return false;

}


let arr = ["baraa", "Mirghani", "Mohamed", "Abuzaid"]

let root = create(arr)

//console.log(root.next.next)

//root.next.next.next = root;

console.log("isLoop: ", isLoop(root))

// console.log(Nodes("Baraa") == Nodes("Baraa"))

traverse(root)