

function findMaxSlidingWindow(nums, w) {
  const res = [];
  const heap = new Heap();
  let numMax = Number.MIN_VALUE;
  let maxIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    heap.offer([currNum, i]);

    if (currNum >= numMax) {
      numMax = currNum;
      maxIndex = i;
    }

    if (i == w - 1) {
      console.log({ numMax });
      res.push(numMax);
    }

    if (i > w - 1) {
      if (i - w == maxIndex) {
        [numMax, maxIndex] = heap.poll();
      }

      res.push(numMax);
      heap.poll();
    }
  }

  return res;
}

console.log(
  findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7, 20], 2),
);
