// by Alexander Nikolskiy
module.exports = max;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine(line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    const [largeOne, largeTwo] = largestTwo(arr)
    return largeOne * largeTwo
}

function largestTwo(array) {
    const len = array.length;
    for (let i = 0; i < 2; i++) {
        for (let k = 0; k < (array.length - i); k++) {
            const element = array[k];
            if (element > array[k + 1]) {
                array[k] = array[k + 1];
                array[k + 1] = element;
            }
        }
    }
    return [array[len - 1], array[len - 2]];
}



