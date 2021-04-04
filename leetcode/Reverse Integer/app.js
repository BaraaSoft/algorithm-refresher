
// https://leetcode.com/problems/reverse-integer/


var reverse = function (x) {
    let str = "";
    let sign = x < 0 ? -1 : 1
    for (let num of x.toString()) {
        str = num + str;
    }
    let res = parseInt(str) * sign;
    if (res > (Math.pow(2, 31) - 1)) return 0;
    if (res < (Math.pow(2, 31) * -1)) return 0;
    return res
};