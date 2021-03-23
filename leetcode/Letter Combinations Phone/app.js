
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

function letterCombinations(digits) {
    let result = [];
    let mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    combin(result, "", mapping, digits, 0)

    //return mapping[+digits[1]]
    return result
}

const combin = (result = [], str, mapping, digits, index) => {
    if (index == digits.length) {
        result.push(str)
        return;
    }

    let letters = mapping[+digits[index]]
    for (let char of letters) {
        combin(result, str + char, mapping, digits, index + 1)
    }
}

console.log(letterCombinations("23"))