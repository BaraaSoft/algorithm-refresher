

const perm = (str, current = "", result = []) => {
    if (str.length == 0) {
        // console.log(current)
        result.push(current)
    } else {
        for (let i = 0; i < str.length; i++) {
            let start = str.slice(0, i)
            let end = str.slice(i + 1, str.length)
            prem(start + end, current + str[i], result)
        }
    }

    return result

}

console.log("the elegant way", perm("abc"))
