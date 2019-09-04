

function pickingNumbers(a) {
    // Write your code here
    const res = a.map((num, key) => {

        //console.log(key)
        return largestSeq(a, key, 0);
    }).sort((a, b) => b.length - a.length)
    return res
}

const largestSeq = (arr, cmpIndex, n, resArr = []) => {
    if (n > arr.length) {
        return []
    }
    const diff = Math.abs(arr[cmpIndex] - arr[n])
    const leastNum = resArr.sort((a, b) => a - b)
    console.log(">> leastNum arr ")
    console.log(leastNum)

    const lestNumDiff = Math.abs(leastNum[0] - arr[n])
    console.log(">> lestNumDiff")
    console.log(lestNumDiff)
    console.log(">> diff")
    console.log(diff)
    if (lestNumDiff < 2) {
        resArr = [...resArr, arr[n]]
    }
    return [...largestSeq(arr, cmpIndex, n + 1, resArr)]
}


const testArry = [1, 2, 2, 3, 1, 2];

//console.log(pickingNumbers(testArry, 0, 0));
console.log(largestSeq(testArry, 1, 0));
