const { Heap } = require('./heap');

const myHeap = new Heap(
  [
    [1, 3],
    [10, 400],
    [5, 10],
    [3, 200],
  ],
  (item) => item.at(0),
);

while (myHeap.length > 0) {
  console.log(myHeap.dequeue());
}
