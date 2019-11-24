// by Alexander Nikolskiy

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

    return getPisanoPeriod(m)
}

module.exports = getFibMod;


// function getPisanoPeriod(m) {
//     let prev = 0;
//     let curr = 1;
//     for (let i = 0; i < m * m; i++) {
//         curr = (curr + prev) % m;
//         prev = curr;
//         if (prev == 0 && curr == 1) return i + 1;
//     }
// }


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
