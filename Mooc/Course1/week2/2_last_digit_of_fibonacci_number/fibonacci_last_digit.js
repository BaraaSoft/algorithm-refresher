
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    // write your code her
    return fibLastDigit(n)
}

function fibLastDigit(n, result = []) {
    if (n == 1) {
        result[n] = 0
    }
    if (n < 3) {
        result[n] = 1;
        return result[n];
    }
    let numA; let numB;
    if (result[n - 1]) numA = result[n - 1];
    else numA = fibLastDigit(n - 1, result);

    if (result[n - 2]) numB = result[n - 2]
    else numB = fibLastDigit(n - 2, result);

    let res = numA + numB
    result[n] = res % 10;
    return result[n];
}

module.exports = fib;