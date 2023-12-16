class Heap {
  static Type = Object.freeze({
    Min: Symbol('MIN_HEAP'),
    Max: Symbol('MAX_HEAP'),
  });

  constructor(arr, selector, type = Heap.Type.Max) {
    this.selector = selector.bind(this);
    this.arr = arr;
    this.type = type;
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

  maxHeap(arr, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (
      left < arr.length &&
      this.selector(arr[left]) > this.selector(arr[i])
    ) {
      largest = left;
    }

    if (
      right < arr.length &&
      this.selector(arr[right]) >
        this.selector(arr[largest])
    ) {
      largest = right;
    }

    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      this.minHeap.call(this, arr, largest);
    }
  }

  buid() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (this.type == Heap.Type.Max) {
        this.maxHeap.call(this, this.arr, i);
      } else {
        this.minHeap.call(this, this.arr, i);
      }
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
