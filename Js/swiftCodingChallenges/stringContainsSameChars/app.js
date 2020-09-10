
const isContainSameChar = (str1 = "", str2 = "") => {

    for (const char of str1) {
        if (!str2.split('').includes(char)) {
            return false
        }
    }

    return true
}

console.log(isContainSameChar("cbAa", "abc"))


