
const arrManipulations = (arrLen, queries) => {
    let orgArr = [];// [...Array(arrLen+1).fill(0)];
    let maxValue = 0;
    for (let arr of queries) {
        const [start, end, value] = arr;
        maxValue = modify(orgArr, start, end, value, maxValue);
    }
    //console.log(orgArr)
    //return max(orgArr);
    return maxValue
}


const modify = (orgArr, start, end, value, maxVal) => {

    for (let i = start; i <= end; i++) {
        if (!orgArr[i]) orgArr[i] = 0
        orgArr[i] = orgArr[i] + value;
        if (orgArr[i] > maxVal) maxVal = orgArr[i]
    }
    return maxVal;
}




function arrayManipulation(arrLen, queries) {
    let orgArr = [];// [...Array(arrLen+1).fill(0)];
    let maxValue = 0;
    let arr;
    for (let index = 0; index < queries.length; index++) {
        const [start, end, value] = queries[index];
        for (let i = start; i <= end; i++) {
            arr = orgArr[i];
            if (!arr) arr = 0
            orgArr[i] = arr + value;
            if (arr > maxValue) maxValue = arr
        }
    }

    return maxValue
}