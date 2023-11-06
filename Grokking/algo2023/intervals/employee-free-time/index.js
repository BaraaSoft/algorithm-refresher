const { Heap } = require('./heap');

function freeTime(arr) {
  const heap = new Heap([], (item) => item.at(0));
  const result = [];

  // heap item: [start,emp,intvIndex]
  for (let i = 0; i < arr.length; i++) {
    const empFirstIntv = arr[i][0];
    heap.enqueue([empFirstIntv.at(0), i, 0]);
  }

  let [prevEnd] = heap.peak();

  while (heap.length > 0) {
    let [currStart, currEmp, currIntvIdx] = heap.dequeue();
    if (currStart > prevEnd) {
      result.push([prevEnd, currStart]);
    }

    prevEnd = Math.max(
      prevEnd,
      arr[currEmp][currIntvIdx][1],
    );

    if (currIntvIdx + 1 < arr[currEmp].length) {
      let newIntv = arr[currEmp][currIntvIdx + 1];
      heap.enqueue([
        newIntv.at(0),
        currEmp,
        currIntvIdx + 1,
      ]);
    }
  }

  return result;
}

console.log(
  freeTime([
    [
      [3, 5],
      [8, 10],
    ],
    [
      [4, 6],
      [9, 12],
    ],
    [
      [5, 6],
      [8, 10],
    ],
  ]),
);

console.log(
  freeTime([
    [
      [1, 2],
      [5, 6],
    ],
    [[1, 3]],
    [[4, 10]],
  ]),
);

console.log(
  freeTime([
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ],
  ]),
);
