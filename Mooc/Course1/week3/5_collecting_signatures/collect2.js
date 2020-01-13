const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    //terminal: false
});
let inputArr = []
process.stdin.setEncoding('utf8');
rl.on('line', readLine);
rl.on('close', done);

function readLine(line) {
    inputArr.push(line);
    //console.log(solve(parseInt(line, 10)));
    //process.exit();
}

function done() {
    let [first, ...rest] = inputArr;
    const segments = rest.map(str => str.split(' ').map(x => parseInt(x)));
    const result = solve(segments);
    const numberOfPoints = result.length;
    console.log(numberOfPoints)
    result.reverse().map((point) => console.log(point))
    process.exit();
}


function solve(segments) {
    // sort the segments based on the endPoint
    const sortedSegments = segments.sort(([firA, secA], [firB, secB]) => secA - secB);
    // create array to store the result, and add the first element to results array
    let results = [sortedSegments[0][1]]

    for (let [index, [start, end]] of sortedSegments.entries()) {
        // Get the last add point
        const point = results[0] // or results.find(pt => pt != undefined);
        // check whether the last added point is out side results range
        if (point < start || point > end) {
            results = [end, ...results]
        }
    }
    return results;
}


//console.log(solve([[1, 3], [2, 5], [3, 6]]))
//console.log(solve([[4, 7], [1, 3], [2, 5], [5, 6]]))
//console.log(solve([[4, 7], [1, 3], [2, 5], [3, 6]]))
//console.log(solve([[4, 7], [1, 3], [2, 5], [5, 6]]))
// let res = solve([[4, 7], [1, 3], [2, 5], [3, 6]])
// console.log(res)
// console.log('-----------------')
// console.log(solve(res))