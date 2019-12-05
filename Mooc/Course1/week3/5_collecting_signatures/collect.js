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
    result.map(([firstPoint, secondPoint]) => console.log(firstPoint))
    process.exit();
}

function solve(segments, pos = 0, results = []) {
    // write your code her
    if (pos >= segments.length) return results;
    if (results.length < 1) {
        results.push(segments[0])
    }
    let shouldAdd = 0;
    for (let i = 0; i < results.length; i++) {
        let refSegment = results[i];
        let newSegment = segments[pos];

        if (isStartOutSide(refSegment, newSegment) && isEndOutSide(efSegment, newSegment)) { }
        else if (!isCrossingAtStart(refSegment, newSegment) && !isCrossingAtEnd(refSegment, newSegment)) {
            shouldAdd += 1
            i = 0;
        } else {
            results[i] = [crossAtStart(refSegment, newSegment), crossAtEnd(refSegment, newSegment)]
        }
        return solve(segments, pos + 1, results);
    }
    if (shouldAdd >= results.length) results.push(newSegment);
    return solve(segments, pos + 1, results);
}


const isEndOutSide = ([refStart, refEnd], [start, end]) => (start < refStart) && (start > refEnd) ? true : false;

const isStartOutSide = ([refStart, refEnd], [start, end]) => (end < refStart) && (end > refEnd) ? true : false;

const isCrossingAtStart = ([refStart, refEnd], [start, end]) => (start >= refStart) && (start <= refEnd) ? true : false;

const isCrossingAtEnd = ([refStart, refEnd], [start, end]) => (end >= refStart) && (end <= refEnd) ? true : false;

const crossAtStart = ([refStart, refEnd], [start, end]) => (start >= refStart) && (start <= refEnd) ? start : refStart;
const crossAtEnd = ([refStart, refEnd], [start, end]) => (end >= refStart) && (end <= refEnd) ? end : refEnd;
//solve([3, 3, 7, 9])


// console.log(solve([[1, 3], [2, 5], [3, 6]]))

// console.log(solve([[4, 7], [1, 3], [2, 5], [5, 6]]))

console.log(solve([[4, 7], [1, 3], [2, 5], [3, 6]]))