class Heap {
  constructor(arr, selector) {
    this.selector = selector.bind(this);
    this.arr = arr;
    this.buid();
  }

  get data() {
    return this.arr;
  }

  get length() {
    return this.arr.length;
  }

  minHeap(arr, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (
      left < arr.length &&
      this.selector(arr[left]) < this.selector(arr[i])
    ) {
      smallest = left;
    }

    if (
      right < arr.length &&
      this.selector(arr[right]) <
        this.selector(arr[smallest])
    ) {
      smallest = right;
    }

    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
      this.minHeap.call(this, arr, smallest);
    }
  }

  buid() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      this.minHeap.call(this, this.arr, i);
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

module.exports = { Heap };
