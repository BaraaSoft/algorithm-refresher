/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let end = nums.length - 1;
  let start = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] >= nums[0]) {
      if (target < nums[mid] && target >= nums[start])
        end = mid - 1;
      else start = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[end])
        start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
};

// [4,5,6,7,0,1,2]
// 6, 7, 0, 1, 2, 3, 4, 5,
