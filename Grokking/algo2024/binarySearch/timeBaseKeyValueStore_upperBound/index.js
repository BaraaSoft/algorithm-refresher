// Q) https://leetcode.com/problems/time-based-key-value-store/
// upper bound binary search
var TimeMap = function () {
  this.store = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.store.has(key)) {
    let node = this.store.get(key);
    node.push({ timestamp, value });
  } else {
    this.store.set(key, [{ timestamp, value }]);
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let nodeArr = this.store.get(key);
  if (!nodeArr) return '';
  let index = this.search(timestamp, nodeArr);
  if (index <= -1) return '';
  return nodeArr[index]?.value;
};

TimeMap.prototype.search = function (target, arr) {
  let start = 0,
    end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const { timestamp } = arr[mid];
    if (target >= timestamp) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end - 1;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
