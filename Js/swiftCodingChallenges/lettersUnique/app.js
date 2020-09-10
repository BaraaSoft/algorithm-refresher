
const isUnique = (str, scaned = [], level = 0) => {
    if (scaned.includes(str[level])) return false
    else if (level < str.length) return isUnique(str, [...scaned, str[level]], level + 1)
    else return true
}

const isUnq = (str = "") => {
    const scanned = []

    for (const char of str.split('')) {

        if (scanned.includes(char)) return false
        scanned.push(char)
    }
    return true
}



const str1 = "Hello"
const str2 = "AaBbCc"

// console.log(isUnique("Hello, world"))
console.log(isUnq(str1))
