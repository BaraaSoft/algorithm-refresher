

const contains = (longStr, str) => {
    let count = 0, k = 0, i = 0;

    for (; k < longStr.length;) {
        if (str[i] == longStr[k++]) {
            count++;
            i++;
        }
    }

    return count == str.length
}

console.log(contains("Hello, world", "worlds"))