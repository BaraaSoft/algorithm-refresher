import { Heap } from './heap';

// Tip: You may use some of the code templates provided
// in the support files
class medianOfStream {
  constructor() {
    // Write your code here
    this.minHeap = new Heap(
      [],
      (num) => num,
      Heap.Type.Min,
    );
    this.maxHeap = new Heap(
      [],
      (num) => num,
      Heap.Type.Max,
    );
  }

  // This function should take a number and store it
  insertNum(num) {
    const { minHeap, maxHeap } = this;
    const currMax = maxHeap.peak();
    if (currMax == null) {
      maxHeap.enqueue(num);
      return;
    }

    if (num > currMax) {
      minHeap.enqueue(num);
    } else {
      maxHeap.enqueue(num);
    }

    if (maxHeap.length > minHeap.length + 1) {
      minHeap.enqueue(maxHeap.dequeue());
    } else if (maxHeap.length < minHeap.length) {
      maxHeap.enqueue(minHeap.dequeue());
    }
  }

  // This function should return the median of the stored numbers
  findMedian() {
    const { minHeap, maxHeap } = this;
    const isOdd =
      (minHeap.length + maxHeap.length) % 2 !== 0;

    // if(minHeap.length != maxHeap.length ){
    //   return maxHeap.peak()
    // }

    if (isOdd) return maxHeap.peak();

    return (maxHeap.peak() + minHeap.peak()) / 2;
  }
}
