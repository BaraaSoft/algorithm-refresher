const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    //output: process.stdout,
    // terminal: false
});

const inputArr = [];
process.stdin.setEncoding('utf8');

rl.on('line', readLine);
rl.on('close', done);



function readLine(line) {
    inputArr.push(line);
}

function done() {
    //process.exit();
    const distance = parseInt(inputArr[0]);
    const maxRange = parseInt(inputArr[1]);

    let stations = inputArr[inputArr.length - 1].split(' ').map(x => parseInt(x));
    console.log(solve(distance, maxRange, stations))
    process.exit();
}

function solve(distance, maxRange, stations) {

    let stops = [];
    stations = [0, ...stations, distance]
    let pos = 0;

    let lastIndex = 0;
    let maxIndex = 0;
    let dist = 0;
    if (stations[stations.length - 1] <= maxRange) return 0;
    while (maxIndex <= stations.length - 1) {
        dist = 0;
        while (dist < maxRange && (maxIndex <= stations.length - 1)) {
            dist = Math.abs(stations[maxIndex] - stations[lastIndex]);
            if (dist > maxRange) break;
            maxIndex++;
        }

        lastIndex = maxIndex - 1;
        stops.push(stations[lastIndex])
        if (stops.length > stations.length) return -1;
    }
    return stops.length - 1;
}


function solvePro(distance, maxRange, stations) {

    let stops = [];
    stations = [0, ...stations, distance]
    let pos = 0;

    let lastIndex = 0;
    let maxIndex = 0;
    let dist = 0;
    if (stations[stations.length - 1] <= maxRange) return 0;
    while (maxIndex <= stations.length - 1) {
        dist = 0;
        while (dist < maxRange && (maxIndex <= stations.length - 1)) {
            dist = Math.abs(stations[maxIndex] - stations[lastIndex]);
            if (dist > maxRange) break;
            maxIndex++;
        }

        lastIndex = maxIndex - 1;
        let distanceCrossed = stations[maxIndex] - stations[lastIndex];
        if (distanceCrossed > maxRange) return -1
        else stops.push(stations[lastIndex]);
    }
    return stops.length - 1;
}

console.log(solve(950, 400, [200, 375, 550, 750]))
// console.log(solve(700, 200, [100, 200, 300, 400]))
// console.log(solve(10, 3, [1, 2, 5, 9])) //out -1 [0,1, 2, 5, 9,10]
// // //console.log(solve(200, 250, [100, 150]))

//console.log(solve(500, 200, [100, 200, 300, 400])) // out 2
//console.log(solve(700, 200, [100, 200, 300, 400])) // out -1

