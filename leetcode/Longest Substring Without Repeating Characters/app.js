

var lengthOfLongestSubstring = function (s) {

    let i = 0, j = 0;
    let len = s.length - 1;
    let strMax = 1;
    let map = {}
    map[s[j]] = 1
    while (j != len && i < len) {
        if (!map[s[j + 1]]) {
            j++;
            map[s[j]] = 1
            strMax = Math.max(strMax, j - i + 1)
        } else {
            map[s[i]] = map[s[i]] - 1;
            i++;
        }
    }
    return strMax
};




lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("pwwkew")