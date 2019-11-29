// fibonacci_huge.js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}


function getFibMod(n, m) {
    // write your code here
    if (m == 0) return 0

    if (n > m) {
        const pisonPeriod = getPisanoPeriod(m);
        const nearestFib = n % pisonPeriod;
        return fib(nearestFib, m)
    } else {
        return fib(n, m)
    }
}

module.exports = getFibMod;



function fib(n, mod, result = []) {
    if (n == 0) {
        result[n] = 0;
        return result[n];
    }
    if (n < 2) {
        result[n] = 1;
        return result[n];
    }

    let fibA = result[n - 1] || fib(n - 1, mod, result);
    let fibB = result[n - 2] || fib(n - 2, mod, result);
    result[n] = (fibA + fibB) % mod;
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
