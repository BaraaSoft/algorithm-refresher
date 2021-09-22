// 115. Distinct Subsequences
// https://leetcode.com/problems/distinct-subsequences/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    return lcs(s, t)
};


const lcs = (s, t, memo = {}) => {
    const slen = s.length - 1;
    const tlen = t.length - 1;

    const key = slen + '#' + tlen
    if (key in memo) return memo[key]

    if (t == '') return 1;
    if (s == '') return 0;

    const ls = s.charAt(slen)
    const ts = t.charAt(tlen)

    if (ls == ts) {
        memo[key] = lcs(s.slice(0, -1), t.slice(0, -1), memo) + lcs(s.slice(0, -1), t, memo)
        return memo[key]
    }

    memo[key] = lcs(s.slice(0, -1), t, memo)
    return memo[key]

}