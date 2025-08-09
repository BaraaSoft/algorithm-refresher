//https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (list) {

    const uniqueNums = new Set(list);
    const nums = [...uniqueNums]
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const prevNum = num - 1;
        let count = 1;
        if (!uniqueNums.has(prevNum)) {
            let nextNum = num + 1
            while (uniqueNums.has(nextNum)) {
                count++;
                nextNum++;
            }
        }
        maxCount = Math.max(maxCount, count)
    }

    return maxCount;
};