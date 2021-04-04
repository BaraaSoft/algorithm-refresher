const theSeperators = ['-', '/', '_'];
const theString = 'baraa-d_google-react/shopee';

function solve(str, sep) {
    let result = ""
    for (let i = 0, l = 0; i < str.length; i++) {
        if (sep.includes(str[i]) || i == (str.length - 1)) {
            let subStr = str.slice(l, i);
            let len = subStr.length
            if (len < 2) {
                result += subStr + str[i]
            } else if (i == (str.length - 1)) {
                result += str[l] + (len - 2) + str[i - 1]
            } else {
                result += str[l] + (len - 2) + str[i - 1] + str[i]
            }
            l = i + 1
        }
    }

    return result;
}


console.log(solve(theString, theSeperators))