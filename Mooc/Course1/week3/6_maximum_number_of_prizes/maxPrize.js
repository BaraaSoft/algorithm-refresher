const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    //terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    const res = solve(parseInt(line, 10))
    console.log(res.length)
    res.forEach(x => console.log(x))
    process.exit();
}

function solve(n) {
    let num = 1;
    let results = [];
    let sum = 0;

    if (n == 2) return [2]
    while (sum < n) {

        let potenialSum = num + sum;
        let reminder = n - potenialSum;
        let notValid = results.includes(reminder)
        if (!notValid) {
            results.push(num);
            sum += num
        }
        if (reminder == 0) break;
        num += 1;
    }

    // for case where n == 5
    if (sum > n) {
        let [, ...rest] = results;
        results = rest;
    }

    return results;
}

// console.log(`5 >> ${solve(5)}`)
// console.log(`7 >> ${solve(7)}`)
// console.log(`8 >> ${solve(8)}`)



