// 56. Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    let res = []
    let intervals = arr.sort((a, b) => a[0] - b[0])

    for (let part of intervals) {
        const last = res.length - 1
        // no overlap
        if (res.length == 0 || res[last][1] < part[0]) {
            res.push(part)
        } else {
            // there is overlap
            res[last][1] = Math.max(res[last][1], part[1])
        }
    }

    return res;
};


let inputs = [[1, 3], [2, 6], [8, 10], [15, 18]];
// Output: [[1,6],[8,10],[15,18]]

console.log(merge(inputs))


