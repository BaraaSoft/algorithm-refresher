const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    // terminal: false,
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);
rl.on('close', done);
let inputArr = [];

function readLine(line) {

    let lineParsed = line.split(' ').map(str => parseInt(str, 10))
        .filter(x => !isNaN(x));
    inputArr.push(lineParsed);
}

function done() {

    const [firstItem, ...items] = inputArr;

    const numItems = firstItem[0];
    const knapsnacks = firstItem[1];

    // const itemsValues = items.map((x) => x[0]);
    // const itemsWeights = items.map((x) => x[1]);
    const allItems = items.map(x => {
        return { value: x[0], weight: x[1] }
    }).sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    // console.log('>> inputString\n');
    // console.log(inputArr);
    // console.log('>> Solve:\n');
    console.log(solve(knapsnacks, allItems))
    process.exit();
}

function solve(knapsnacks, items) {
    // write your code her:
    // console.log('knapsnacks');
    // console.log(knapsnacks)
    // console.log(items);

    let curryWeight = knapsnacks;
    let current = 0;
    let totalValue = 0;
    while (curryWeight > 0 && current < items.length) {
        let item = items[current];
        // if no more switch to another item
        if (parseFloat(item.weight).toFixed(4) <= 0.0001) {
            current += 1;
            if (current > items.length - 1) break;
            item = items[current]
        }
        // kn 50 w 100
        let amount = curryWeight < item.weight ? curryWeight : item.weight;
        let currentValue = amount * (item.value / item.weight);
        totalValue += currentValue;
        item.weight = item.weight - amount;
        curryWeight = curryWeight - amount;
    }

    return parseFloat(totalValue).toFixed(4);
}


