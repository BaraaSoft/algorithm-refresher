// https://leetcode.com/problems/integer-break/

var integerBreak = function (n) {
    if (n == 2) return 1
    if (n == 3) return 2
    return breakIt(n)
};

function breakIt(n) {
    if (n <= 0) return 1
    if (n % 3 == 0) {
        let reminder = n - 3;
        return breakIt(reminder) * 3
    } else {
        let reminder = n - 2
        return breakIt(reminder) * 2
    }
}