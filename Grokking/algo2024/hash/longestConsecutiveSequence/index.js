// https://leetcode.com/problems/longest-consecutive-sequence/?envType=company&envId=google&favoriteSlug=google-thirty-days
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  const set = new Set(nums);
  let longestSequence = 1;

  for (let i = 0; i < nums.length; i++) {
    let currlen = 0;
    let prevNum = nums[i] - 1;
    let nextNum = nums[i];

    if (!set.has(prevNum)) {
      while (set.has(nextNum)) {
        currlen++;
        nextNum++;
      }
      longestSequence = Math.max(longestSequence, currlen);
    }
  }
  return longestSequence;
};
