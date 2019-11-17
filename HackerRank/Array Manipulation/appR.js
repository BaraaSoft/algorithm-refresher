function arrayManipulation(arrLen, queries) {
    let orgArr = [];// [...Array(arrLen+1).fill(0)];
    let maxValue = 0;
    let sumValue = 0;
    let lastEnd = 0;
    let lateStart = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < queries.length; index++) {
        let [start, end, value] = queries[index];
        sumValue += value;
        lastend = (end > lastEnd) ? end : lastEnd;
        lateStart = (start < lateStart) ? start : lateStart
    }



    return maxValue
}

