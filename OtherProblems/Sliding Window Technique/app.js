/* Find the max sum of subarry of fixed size k */


function maxSubarryOfSize(arr, k) {
    let i = 1, j = 1;
    let len = arr.length;
    let theMax = Number.MIN_VALUE, currMax = 0;
    for (let i = 0; i < arr.length; i++) {
        currMax += arr[i];
        if (i >= (k - 1)) {
            theMax = Math.max(currMax, theMax);
            currMax -= arr[i - (k - 1)]
        }
    }

    return theMax;

}
//console.log(maxSubarryOfSize([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3))


/* smallest subarry with given sum */
function smallestSubarry(arr, target) {

    let minSize = Number.MAX_VALUE;
    let sum = 0, i = 0;
    res = []

    for (let j = 0; j < arr.length; j++) {
        sum += arr[j]
        while (sum >= target) {
            // minSize = Math.min(j - i + 1, minSize)
            if (j - i + 1 < minSize) {
                res = [i, j]
                minSize = j - i + 1
            }
            sum -= arr[i++]
        }
    }

    return arr.slice(res[0], res[1] + 1)
}



console.log(smallestSubarry([4, 2, 2, 7, 8, 1, 2, 5, 1, 0], 8))