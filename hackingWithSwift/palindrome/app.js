
const isSame = (str1, str2) => {
    if (str1.length != str2.length) return false
    for (let i = 0; i < str1.length; i++) {
        let pos = str2.indexOf(str1[i])
        if (pos > -1) {
            let arr = str2.split('');
            arr.splice(pos, 1)
            str2 = arr.join("")
        } else {
            return false
        }
    }
    console.log(str2)
    return true;
}



console.log(isSame('abcc', 'abca'))

//console.log([1, 2, 3, 4].splice(2, 1))