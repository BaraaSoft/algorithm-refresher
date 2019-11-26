// fibonacci_squares_sum.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fibonacci_squares_sum(parseInt(line, 10)));
    process.exit();
}

function fibonacci_squares_sum(n) {

    let resArr = [0];
    fibon(n, resArr);

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
    countArr[0] = result[n] * (fibA + result[n])
    return result[n]
}