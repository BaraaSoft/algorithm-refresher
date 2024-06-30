class Heap {
  arr = [];
  constructor(arr) {
    this.arr = arr;
    this.heapify();
  }
  heapify(i = 0) {
    const { arr } = this;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    let largest = i;

    if (l < arr.length && arr[l] > arr[i]) {
      largest = l;
    } else if (r < arr.length && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest !== i) {
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      this.heapify.call(this, largest);
    }
  }
  dequeue() {
    const val = this.arr.shift();
    this.heapify();
    return val;
  }
}

const myheap = new Heap([1, 14, 10, 8, 7]);

while (myheap.arr.length > 0) {
  console.log(myheap.dequeue());
}
