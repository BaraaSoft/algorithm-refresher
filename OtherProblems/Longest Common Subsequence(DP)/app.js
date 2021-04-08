

function longestSub(strA, strB) {
    if (strA == '' || strB == '') return 0;

    let [A, ...restA] = strA;
    let [B, ...restB] = strB;
    if (A == B) {
        return 1 + longestSub(restA, restB)
    } else {
        return Math.max(longestSub(strA, restB), longestSub(restA, strB))
    }
}

console.log(longestSub("ABCD", "ABCD"))
console.log(longestSub("ADC", "ABCD"))
console.log(longestSub("DBC", "CBD"))