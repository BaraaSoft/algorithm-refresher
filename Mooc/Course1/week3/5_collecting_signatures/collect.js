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
    result.map(([firstPoint, secondPoint]) => console.log(secondPoint))
    process.exit();
}

// function solve(segments, pos = 0, results = []) {
//     // write your code her
//     if (pos >= segments.length) return results;
//     if (results.length < 1) {
//         results.push(segments[0])
//     }
//     let shouldAdd = 0;
//     for (let i = 0; i < results.length; i++) {
//         let refSegment = results[i];
//         let newSegment = segments[pos];

//         if (isStartOutSide(refSegment, newSegment) && isEndOutSide(efSegment, newSegment)) { }
//         else if (!isCrossingAtStart(refSegment, newSegment) && !isCrossingAtEnd(refSegment, newSegment)) {
//             shouldAdd += 1
//             i = 0;
//         } else {
//             results[i] = [crossAtStart(refSegment, newSegment), crossAtEnd(refSegment, newSegment)]
//         }
//         return solve(segments, pos + 1, results);
//     }
//     if (shouldAdd >= results.length) results.push(newSegment);
//     return solve(segments, pos + 1, results);
// }

function solve(segments, pos = 0, results = []) {
    // write your code her
    if (results.length < 1) {
        results.push(segments[0])
    }
    let shouldAdd = 0;
    for (let i = 0; i < results.length; i++) {
        while (pos < segments.length) {
            let refSegment = results[i];
            let newSegment = segments[pos];
            if (isStartOutSide(refSegment, newSegment) && isEndOutSide(refSegment, newSegment)) {
                //console.log(">> 1 >> results")

                shouldAdd = 0;

            } else if (!isCrossingAtStart(refSegment, newSegment) && !isCrossingAtEnd(refSegment, newSegment)) {
                //console.log(">> 2 >> results")

                if (shouldAdd >= results.length) {
                    results = [newSegment, ...results]
                    //results.push(newSegment);
                    shouldAdd = 0;
                } else {
                    i = -1;
                    shouldAdd++;
                    break;
                }
            } else {
                //console.log(">> 3 >> results")
                shouldAdd = 0;
                results[i] = [crossAtStart(refSegment, newSegment), crossAtEnd(refSegment, newSegment)]
            }

            if ((pos >= segments.length - 1) && i < results.length) {
                break;
            }
            pos++;
        }
    }

    return results;
}



const isEndOutSide = ([refStart, refEnd], [start, end]) => (start > refStart) && (start > refEnd) ? true : false;

const isStartOutSide = ([refStart, refEnd], [start, end]) => (end > refStart) && (end > refEnd) ? true : false;

const isCrossingAtStart = ([refStart, refEnd], [start, end]) => (start >= refStart) && (start <= refEnd) ? true : false;

const isCrossingAtEnd = ([refStart, refEnd], [start, end]) => (end >= refStart) && (end <= refEnd) ? true : false;

const crossAtStart = ([refStart, refEnd], [start, end]) => (start >= refStart) && (start <= refEnd) ? start : refStart;
const crossAtEnd = ([refStart, refEnd], [start, end]) => (end >= refStart) && (end <= refEnd) ? end : refEnd;
//solve([3, 3, 7, 9])


// console.log(solve([[1, 3], [2, 5], [3, 6]]))

// console.log(solve([[4, 7], [1, 3], [2, 5], [5, 6]]))
// console.log(solve([[4, 7], [1, 3], [2, 5], [3, 6]]))
// console.log(solve([[4, 7], [1, 3], [2, 5], [5, 6]]))
// let res = solve([[4, 7], [1, 3], [2, 5], [3, 6]])
// console.log(res)
// console.log('-----------------')
// console.log(solve(res))