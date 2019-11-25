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
    console.log(">> <<")
    console.log(`${froms} - ${to}`)
}