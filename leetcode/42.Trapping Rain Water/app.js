// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
    const len = heights.length;
    let maxLeft = [];
    let maxRight = [];
    let res = 0

    maxLeft[0] = heights[0]
    for (let i = 1; i < heights.length; i++) {
        maxLeft[i] = Math.max(heights[i], maxLeft[i - 1])
    }

    maxRight[len - 1] = heights[len - 1]
    for (let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(heights[i], maxRight[i + 1])
    }

    for (let i = 0; i < len; i++) {
        res += Math.min(maxRight[i], maxLeft[i]) - heights[i]
    }

    return res
};