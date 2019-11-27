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
    let resArr = [0];
    fibon(to, resArr, froms, to)
    return resArr[0] % 10;
}


function fibon(n, countArr, froms, to, result = []) {
    if (n == 0) {
        result[n] = 0;
        return result[n]
    }
    if (n < 2) {
        result[n] = 1;
        if (n >= froms && n <= to)
            countArr[0] += result[n];
        return result[n];
    }

    let fibA = result[n - 1] || fibon(n - 1, countArr, froms, to, result);
    let fibB = result[n - 2] || fibon(n - 2, countArr, froms, to, result);
    result[n] = (fibA + fibB) % 100;
    if (n >= froms && n <= to)
        countArr[0] += result[n];

    return result[n]
}

