// Q) https://leetcode.com/problems/random-pick-with-weight/
// Lower bound binary search

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.arr = w;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const prefixSumArr = [];

  for (let i = 0; i < this.arr.length; i++) {
    let sum = prefixSumArr.at(-1) ?? 0;
    prefixSumArr.push(sum + this.arr[i]);
  }

  const randomNum = Math.random() * prefixSumArr.at(-1);

  const index = this.search(randomNum, prefixSumArr);

  return index;
};

Solution.prototype.search = function (target, theArr) {
  let start = 0;
  let end = theArr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (target > theArr[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
