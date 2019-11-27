// fibonacci_sum_squares.js
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
    const pisonPeriod = getPisanoPeriod(100);
    const nearestFib = n % pisonPeriod;
    fibon(nearestFib, resArr)
    return resArr[0] % 10;
}

function fibon(n, countArr, result = []) {
    if (n == 0) {
        result[n] = 0;
        return result[n]
    }

    if (n < 2) {
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