class Heap {
  constructor(arr) {
    this.arr = arr;
    this.buid();
  }

  get data() {
    return this.arr;
  }

  get length() {
    return this.arr.length;
  }

  maxHeap(arr, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < arr.length && arr[left] > arr[i]) {
      largest = left;
    }

    if (right < arr.length && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      this.maxHeap(arr, largest);
    }
  }

  buid() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      this.maxHeap(this.arr, i);
    }
  }

  enqueue(value) {
    this.arr.push(value);
    this.buid();
  }

  dequeue() {
    const item = this.arr.shift();
    this.buid();
    return item;
  }
  peak() {
    return this.arr[0];
  }
}

const heap = new Heap([
  1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17,
]);

heap.enqueue(100);
heap.enqueue(200);

//console.log({ heap: heap.data });

while (heap.length > 0) {
  console.log(heap.dequeue());
}

// suppose : 17 15 13 9 6 5 10 4 8 3 1
// console : 17 15 13 9 6 5 10 4 8 3 1
