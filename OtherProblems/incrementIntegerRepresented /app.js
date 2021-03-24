

const increment = (arr) => {

    let val = arr.reduce((acc, cur, index, arr) => {
        return acc + multiply(cur, index, arr.length)
    }, 0)

    let res = String(val + 1).split("")

    return res
}


const multiply = (num, index, len) => {
    let mul = 1

    let upto = len - index - 1

    for (let i = 0; i < upto; i++) {
        mul *= 10;
    }

    return mul * num
}

let arr = [1, 4, 5, 0]

console.log(increment(arr))

