
const setA = [4, 6, 5, 3, 3, 1];


/**** Finding the largest sub array with length difference less than 1 ****/
const largestSubarrySeq = (inArr) => {
    const oneDiffSubArrys = allSubArry(inArr)
        .filter(arr => subarryDiff(arr.sort((a, b) => a - b, 0), 0) < 2)
        .sort((a, b) => b.length - a.length);
    return oneDiffSubArrys[0];
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

const subarryDiff = (arr, n) => {
    if (n > (arr.length - 1)) return 0;
    const lastLargestDiff = subarryDiff(arr, n + 1);
    const diff = Math.abs(arr[0] - arr[n]);
    return (diff > lastLargestDiff) ? diff : lastLargestDiff;
}
//const subarrs = allSubArry([1, 2, 2, 3, 4]);
console.log(largestSubarrySeq([1, 2, 2, 3, 1, 2]))