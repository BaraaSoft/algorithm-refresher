var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return ""
    return longest(strs)
};


const longest = (arr) => {

    let baseStr = arr[0];
    let res = ''
    let isMatch = true;
    for (let i = 0; i < baseStr.length; i++) {
        for (let str of arr) {
            if (str[i] == baseStr[i]) {
                isMatch = isMatch && true
            } else {
                isMatch = isMatch && false
            }
        }
        if (isMatch) res += baseStr[i]
    }
    return res
}