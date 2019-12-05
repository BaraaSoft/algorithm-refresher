const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    //terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(solve(parseInt(line, 10)));
    process.exit();
}

function solve(n) {
    // write your code her
    return '0';
}