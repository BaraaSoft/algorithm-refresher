
// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (str) {
    let map = new Map()

    for (let elm of str) {
        if (map.has(elm)) {
            let val = map.get(elm)
            map.set(elm, val + 1)
        } else {
            map.set(elm, 1)
        }
    }



    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) == 1)
            return i;
    }
    return -1
};





console.log(solve("leetcode"))
console.log(solve("aadadaad"))