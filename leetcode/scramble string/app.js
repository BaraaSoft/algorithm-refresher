// https://leetcode.com/problems/scramble-string/submissions/

function scrambled(str1, str2, map = new Map()) {
    let key = (str1 + str2) || ''
    if (key !== '' && map.has(key)) return map.get(key)
    let len = str1.length;
    if (len == 1) return str1 == str2;
    if (str1 == str2) return true;


    let res = []
    for (let i = 1; i < len; i++) {
        let conditionA = scrambled(str1.slice(0, i), str2.slice(0, i), map) && scrambled(str1.slice(i), str2.slice(i), map);

        let conditionB = scrambled(str1.slice(0, i), str2.slice(len - i), map) && scrambled(str1.slice(i), str2.slice(0, len - i), map);

        if (conditionA || conditionB) {
            map.set(key, true)
            return true
        }
    }
    map.set(key, false)

    return false
}

let time = Date.now()
console.log(scrambled("abcdefghijklmnopq", "efghijklmnopqcadb"))
console.log("time: ", Date.now() - time)