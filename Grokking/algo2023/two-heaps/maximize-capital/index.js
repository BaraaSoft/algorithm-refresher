const { Heap } = require('./heap');

function maximumCapital(c, k, capitals, profits) {
  const minHeap = new Heap(
    [],
    ({ capital }) => capital,
    Heap.Type.Min,
  );

  for (let i = 0; i < capitals.length; i++) {
    minHeap.enqueue({
      capital: capitals[i],
      profit: profits[i],
    });
  }

  let currC = c;

  const maxHeap = new Heap(
    [],
    ({ profit }) => profit,
    Heap.Type.Max,
  );

  for (let count = 0; count < k; count++) {
    while (
      minHeap.peak() &&
      currC >= minHeap.peak()?.capital
    ) {
      const { profit, capital } = minHeap.dequeue();
      maxHeap.enqueue({ profit, capital });
    }
    if (maxHeap.peak()) {
      const { profit } = maxHeap.dequeue();
      currC += profit;
    }
  }

  return currC;
}

console.log(
  maximumCapital(1, 2, [1, 2, 2, 3], [2, 4, 6, 8]),
);

// console.log(
//   maximumCapital(2, 3, [1, 2, 3, 4], [1, 3, 5, 7]),
// );
