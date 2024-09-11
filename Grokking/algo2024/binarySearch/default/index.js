// 704. Binary Search

var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target == nums[mid]) return mid;
    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};
