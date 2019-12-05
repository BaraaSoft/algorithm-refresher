const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    //terminal: false
});
let inputArr = [];
process.stdin.setEncoding('utf8');

rl.on('line', readLine);
rl.on('close', done);


function readLine(line) {
    let arr = line.split(' ');
    inputArr.push(arr)
}

function done() {
    const profites = inputArr[1];
    const clicks = inputArr[2];
    let res = solve(profites, clicks);
    console.log(res)
    return res;
}

function solve(profites, clicks) {
    // write your code her
    let profitesSorted = profites.sort((a, b) => b - a);
    let clicksSorted = clicks.sort((a, b) => b - a);

    return profitesSorted.reduce((accum, pr, index) => accum + (clicksSorted[index] * pr), 0)
}