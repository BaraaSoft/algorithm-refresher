// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

var longestSubstring = function (s, k) {

    return longestSub(s, k, 0, s.length - 1)
};


function longestSub(str, k) {
    let len = str.length
    if (len < k || len == 0) return 0
    let map = {}
    for (let char of str) {
        if (map.hasOwnProperty(char)) {
            map[char] = map[char] + 1
        } else {
            map[char] = 1
        }
    }
    let mid = 0
    while (mid < len && map[str[mid]] >= k) { mid++ }
    if (mid < len) {
        return Math.max(
            longestSub(str.slice(0, mid), k),
            longestSub(str.slice(mid + 1), k))
    }
    return len
}