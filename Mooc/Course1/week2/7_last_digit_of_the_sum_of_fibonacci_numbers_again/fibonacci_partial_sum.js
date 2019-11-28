// fibonacci_partial_sum.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    const lineArr = line.split(' ')
    const numA = parseInt(lineArr[0], 10);
    const numB = parseInt(lineArr[1], 10)
    console.log(fibonacci_partial_sum(numA, numB));
    process.exit();
}


function fibonacci_partial_sum(froms, to) {
    const pisonPeriod = getPisanoPeriod(10);
    const nearestFibA = froms % pisonPeriod;

    const pisonPeriodB = getPisanoPeriod(10);
    const nearestFibB = to % pisonPeriodB;
    let arr = []
    let resArr = [0];
    fibon(nearestFibB, resArr, nearestFibA, nearestFibB, arr)
    return resArr % 10;
}


function fibon(n, countArr, froms, to, result = []) {
    if (n < 2) {
        result[n] = n;
        if ((n >= froms) && (n <= to))
            countArr[0] = countArr[0] + result[n];
        return result[n];
    }

    let fibA = result[n - 1] || fibon(n - 1, countArr, froms, to, result) % 10;
    let fibB = result[n - 2] || fibon(n - 2, countArr, froms, to, result) % 10;
    result[n] = (fibA + fibB) % 10;
    if ((n >= froms) && (n <= to))
        countArr[0] = countArr[0] + result[n];

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

