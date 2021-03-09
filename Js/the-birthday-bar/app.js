// https://www.hackerrank.com/challenges/the-birthday-bar/problem

/*

*/

function birthday(s, d, m) {
    let len = s.length;
    let h = 0, l = 0;
    let res = 0;
    for (let i = 0; i <= len - m; i++) {
        l = i;
        h = i + m
        sum(s, l, h) == d ? res++ : 0;
    }
    return res
}


// sum = arr.reduce((acc, curr, x) => {
//     return x <= i ? acc + curr : acc
// }, 0)

let arr = [3, -9, 1, -30]



// function maxSubarr(arr) {
//     let curMax = arr[0], bestMax = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         curMax = Math.max(arr[i] + curMax, arr[i])
//         if (curMax > bestMax) bestMax = curMax
//     }
//     return bestMax;
// }

function maxSubarr(arr) {
    let curMax = 0, bestMax = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        curMax = Math.max(arr[i] + curMax, arr[i])
        console.log(`arr[i]: ${arr[i]}, curMax: ${curMax}`)
        if (curMax > bestMax) bestMax = curMax
    }
    return bestMax;
}

console.log("max subarr: ", maxSubarr(arr))