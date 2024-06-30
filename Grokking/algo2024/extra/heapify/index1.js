class heapIt {
  arr = [];

  constructor(argArr) {
    this.arr = argArr;
    this.heapif(0);
  }

  heapif(n = 0) {
    const { arr, left, right, heapif } = this;
    if (n >= arr.length) return arr;

    const curr = arr[n];
    if (left.call(this, n) && left.call(this, n) > curr) {
      arr[n] = left.call(this, n);
      arr[2 * n + 1] = curr;
      return heapif.call(this, 2 * n + 1);
    }

    if (right.call(this, n) && right.call(this, n) > curr) {
      arr[n] = right.call(this, n);
      arr[2 * n + 2] = curr;
      return heapif.call(this, 2 * n + 2);
    }

    return arr;
  }

  dequeue() {
    const val = this.arr.shift();
    this.heapif();

    return val;
  }
  left(i) {
    const index = 2 * i + 1;
    return index >= this.arr.length
      ? null
      : this.arr[index];
  }

  right(i) {
    const index = 2 * i + 2;
    return index >= this.arr.length
      ? null
      : this.arr[index];
  }
}

const myheap = new heapIt([1, 14, 10, 8, 7]);

while (myheap.arr.length > 0) {
  console.log(myheap.dequeue());
}
