
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
    return fibon(n);
}


function fibon(n, result = []) {
    if (n <= 2) {
        result[n] = 1;
        return result[n];
    }
    let numA; let numB;
    if (result[n - 1]) numA = result[n - 1];
    else numA = fibon(n - 1, result);

    if (result[n - 2]) numB = result[n - 2]
    else numB = fibon(n - 2, result);

    let res = numA + numB
    result[n] = res;
    return res;
}

module.exports = fib;

