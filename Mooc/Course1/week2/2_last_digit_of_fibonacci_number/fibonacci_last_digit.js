
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

    const pisonPeriod = getPisanoPeriod(10);
    const newFibNum = n % pisonPeriod;
    return fibLastDigit(newFibNum);
}

function fibLastDigit(n, result = []) {

    if (n < 2) {
        result[n] = n;
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

module.exports = fib;