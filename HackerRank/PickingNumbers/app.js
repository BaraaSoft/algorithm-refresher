
const setA = [4, 6, 5, 3, 3, 1];

const solve = (inArr) => {
    const arrSorted = inArr.sort((a, b) => a - b)
    return arrSorted;
}

const minPick = (inArr, n) => {
    if (n >= inArr.length) {
        return []
    }


    if (inArr[n] - inArr[n - 1] <= 1) return inArr[n];


    const currArr = minPick(inArr, n + 1).concat(inArr[n]);


    return minPick(inArr, n + 1).concat(inArr[n])

}

const sum = (arr) => {
    return arr.reduce((accum, current) => accum + current, 0)
}


const subArry = (arr, n, npair) => {
    // double pair [arr[n], arr[n + 1]];
    // triple pair [arr[n], arr[n + 1],arr[n + 2]]
    if (n >= arr.length - npair) return [];
    let pairs = [];
    for (let i = 0; i <= npair; i++) {
        pairs.push(arr[n + i])
    }
    return subArry(arr, n + 1, npair).concat([pairs])
}
const allSubArry = (arr) => {
    const numCombination = (arr.length - 1);
    let res = [];
    for (let i = 0; i <= numCombination; i++) {
        res.push(...subArry(arr, 0, i))
    }
    return res;
}

console.log(allSubArry([1, 2, 2, 3, 4]))