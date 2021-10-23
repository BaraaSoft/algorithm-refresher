
//https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    const stack = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        let last = stack.length - 1;
        if (stack[last][1] < start) {
            stack.push([start, end])
        } else {
            stack[last][1] = Math.max(end, stack[last][1])

        }
    }
    return stack
};