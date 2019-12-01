const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(solve(parseInt(line, 10)));
    process.exit();
}

function solve(n) {
    let number = n;
    let change = 0;
    while (number > 0) {
        let checkRes = number;
        if (checkRes >= 10) number -= 10;
        else if (number >= 5) number -= 5;
        else if (number > 0) number -= 1;
        else break;
        change += 1;
    }
    return change;
}


