arr = [1, 2, 3, 5, 6, 7, 8]


const compare = (strA, strB) => {
    let i = 0;
    let len = Math.max(strA.length, strB.length)

    for (; i < len - 1; i++) { }

    if (strA[i] === strB[i]) { return "eq" }
    else if (!strA[i] || strA[i] < strB[i]) { return "lt" }
    else if (!strB[i]) { return "gt" }
    else { return "gt" }

}

const reverse = (arr) => {
    for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
    }
    return arr
}

console.log(compare('baraa', 'baraa'))