const { Heap } = require('./heap');

function leastTime(tasks, n) {
  const map = new Map();
  const heap = new Heap([], (item) => item.at(1));
  const result = [];
  for (let i = 0; i < tasks.length; i++) {
    const key = tasks[i];
    if (map.has(key)) {
      const newVal = map.get(key) * 28;
      map.set(key, newVal * 10);
    } else {
      map.set(key, key.charCodeAt(0));
    }

    heap.enqueue([key, map.get(key)]);
  }

  let start = 0;
  const coolingWindow = new Map();
  const arr = [];
  while (heap.length > 0) arr.push(heap.dequeue());

  const size = arr.length;
  let i = 0;

  while (start < arr.length) {
    const [char] = arr[start];

    if (coolingWindow.has(char)) {
      result.push('idle');
    } else {
      result.push(arr[i++].at(0));
    }

    if (start <= n) {
      coolingWindow.set(char, 1);
    } else {
      if (coolingWindow.has(char)) {
        coolingWindow.set(char, 1);
      } else {
        coolingWindow.delete(arr.at(start));
      }
    }
    start++;
  }

  console.log(result);

  return result.length;
}

// console.log(
//   '>> ',
//   leastTime(['A', 'A', 'A', 'B', 'B', 'C', 'C'], 1),
// );
// console.log(
//   '>> ',
//   leastTime(['D', 'A', 'F', 'B', 'G', 'E', 'C'], 5),
// );

// console.log(
//   '>> ',
//   leastTime(
//     ['A', 'A', 'C', 'C', 'C', 'B', 'E', 'E', 'E'],
//     2,
//   ),
// );

console.log('>> ', leastTime(['A', 'A', 'B', 'B'], 2));
