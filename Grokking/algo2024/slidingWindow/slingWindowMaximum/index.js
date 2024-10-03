export function findMaxSlidingWindow(nums, k) {
  const res = [];
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] > nums[queue.at(-1)])
      queue.pop();
    queue.push(i);

    if (i >= k && i - k === queue[0]) queue.shift();

    if (i >= k - 1) res.push(nums[queue.at(0)]);
  }

  return res;
}

console.log(
  findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3),
);
console.log(
  findMaxSlidingWindow([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 4),
);
