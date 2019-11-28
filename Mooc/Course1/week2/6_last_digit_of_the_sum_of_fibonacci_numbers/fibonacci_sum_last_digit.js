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

    const pisonPeriod = getPisanoPeriod(10);
    const newFib = n % pisonPeriod;
    let arr = []
    let resArr = [0]
    const fibNum = fibon(newFib, resArr, arr);
    // return arr.filter(x => x != null).reduce((accum, next) => accum + next);
    return resArr[0] % 10;
}


function fibon(n, countArr, result = []) {

    if (n < 2) {
        result[n] = n;
        countArr[0] += result[n]
        return result[n];
    }

    let fibA = result[n - 1] || (fibon(n - 1, countArr, result) % 10);
    let fibB = result[n - 2] || (fibon(n - 2, countArr, result) % 10);
    result[n] = (fibA + fibB) % 10;
    countArr[0] += result[n]
    return result[n]
}


function getPisanoPeriod(m) {
    let a = 0;
    let b = 1;
    let c = a + b;
    for (let i = 0; i < m * m; i++) {
        c = (a + b) % m;
        a = b;
        b = c;
        if (a == 0 && b == 1) return i + 1;
    }
}

module.exports = fibonacci_sum_last_digit;
