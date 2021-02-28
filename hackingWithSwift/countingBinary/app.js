
// Create a function that accepts any positive integer and returns the next highest and next lowest number that has the same number of ones in its binary representation.If either number is not possible, return nil for it.

const solve = (num) => {
    let i = num, j = num, nextNum;
    do { i++; } while (oneCount(i) != oneCount(num))
    do { j--; } while (oneCount(j) != oneCount(num))
    return [i, j]
}


const oneCount = (num) => {
    let binary = Number(num).toString(2)
    return binary.split("").reduce((prev, next) => {
        return next == '1' ? prev + 1 : prev
    }, 0)
}

console.log(solve(28))

console.log(Number(23).toString(2))