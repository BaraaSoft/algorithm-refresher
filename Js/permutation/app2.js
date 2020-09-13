
const sum = (arr) => arr.reduce((accum, cur) => accum + cur, 0)


const spacePerm = (arr = [], countArr = [], limit, result = [], level = 0) => {
    if (level == limit) {
        console.log(result.join(''))
    }

    for (var i = 0; i < arr.length; i++) {
        if (countArr[i] === 0)
            continue
        countArr[i]--;
        result[level] = arr[i]
        spacePerm(arr, countArr, limit, result, level + 1)
        countArr[i]++;
    }

}

