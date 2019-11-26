// fibonacci_sum_last_digit.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fibonacci_sum_last_digit(parseInt(line, 10)));
    process.exit();
}

function fibonacci_sum_last_digit(n) {
    // write your code here
    let arr = []
    let resArr = [0]
    const fibNum = fibon(n, resArr, arr);
    // return arr.filter(x => x != null).reduce((accum, next) => accum + next);
    return resArr[0] % 10;
}


function fibon(n, countArr, result = []) {
    if (n == 0) {
        result[n] = 0;
        return result[n]
    }
    if (n < 3) {
        result[n] = 1;
        countArr[0] += result[n]
        return result[n];
    }

    let fibA = result[n - 1] || fibon(n - 1, countArr, result);
    let fibB = result[n - 2] || fibon(n - 2, countArr, result);
    result[n] = (fibA + fibB) % 100;
    countArr[0] += result[n]
    return result[n]
}

module.exports = fibonacci_sum_last_digit;
