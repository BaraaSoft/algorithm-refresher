const { LinkedList, Node } = require('./linkedList');

const myList = new LinkedList(new Node("baraa"))
myList.add("Mirghani").add("Mohamed").add(new Node('abuzaid'));

myList.traverse((data) => console.log(data))