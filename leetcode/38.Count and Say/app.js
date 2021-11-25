//https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {

    return solve(n)
};

const solve = (n) => {
    if (n <= 1) return "1";
    let res = solve(n - 1);

    let strArr = count(res.toString());
    let s = ''
    for (let [key, val] of strArr) {
        if (key && val)
            s += val + "" + key
    }

    return s
}

const count = (str) => {
    let map = []
    let last = 0
    let group = []
    for (let num of str) {
        if (group[0] != num && num != last) {
            map.push([...group])
            group = [num, 1]
        } else {
            group[1] = group[1] + 1
        }
        last = num
    }
    return [...map, group]
}