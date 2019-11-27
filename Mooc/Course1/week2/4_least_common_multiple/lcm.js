
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    const nums = line.split(' ').map(x => parseInt(x, 10))
    console.log(lcm(nums[0], nums[1]));
    process.exit();
}


function lcm(a, b) {
    let lga = a;
    let lgb = b;
    let largest = a > b ? a : b
    let theI = 0;
    if (a == 0 || b == 0) return 0;
    for (let i = largest; i <= (b * a); i++) {
        let conditionA = (i % a) == 0;
        let conditionB = (i % b) == 0;
        if (conditionA && conditionB) return i;
        theI = i;
    }
    return theI;
}


// function lcm(a, b) {
//     let lga = a;
//     let lgb = b;
//     for (let i = 1; i <= (b * a); i++) {
//         let conditionA = (lgb % a) == 0;
//         let conditionB = (lga % b) == 0;

//         if (!conditionA) {
//             lgb = 3 * lgb;
//         }
//         if (!conditionB) {
//             //console.log(`>> (lgb % a) (${lgb} % ${a} = ${lgb % a})`)
//             lga = 3 * lga;
//         }

//         if (conditionA && conditionB) {
//             break;
//         }
//     }
//     return (lga < lgb) ? lga : lgb
// }


