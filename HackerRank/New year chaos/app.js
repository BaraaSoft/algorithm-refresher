'use strict';

let data = [2, 1, 5, 3, 4]
let dataToo = [2, 5, 1, 3, 4]


// Complete the minimumBribes function below.
function minimumBribes(q) {
    return sort(q)
}



function sort(arr) {
    let swapCount = 0;
    let bribeArr = arr.map(it => 0);
    let sorted = true;
    for (let i = 0; i < arr.length; i++) {
        sorted = true;
        for (let x = 0; x < (arr.length - i); x++) {
            let element = arr[x];
            if (arr[x] > arr[x + 1]) {
                sorted = false;
                arr[x] = arr[x + 1]
                arr[x + 1] = element;
                swapCount++;
                bribeArr[element - 1]++;
            }
        }
        if (sorted == true) break;
    }
    let bribeNum = bribeArr.filter(bribe => bribe > 2);
    return (bribeNum.length > 0) ? 'Too chaotic' : swapCount;
}

console.log(minimumBribes(data))