
const algo = (A, B, C) => {
    let countArry = [A, B, C];
    const strArry = ['a', 'b', 'c'];

    perum(countArry, strArry)
}


const perum = (countArry, strArry, result, level, perumResult = [], limit) => {
    if (level === result.length && result.length > limit - 1) {
        perumResult.push(result.join(''))
    }

    for (let i = 0; i < strArry.length; i++) {
        if (countArry[i] === 0)
            continue;
        result[level] = strArry[i];
        countArry[i]--;
        perum(countArry, strArry, result, level + 1, perumResult, limit);
        countArry[i]++;

    }

}

const sum = (arr = []) => {
    return arr.reduce((accum, current) => accum + current, 0)
}



let res = []
perum([2, 1, 1], ['a', 'b', 'c'], [], 0, res, sum([2, 1, 1]))
console.log(res)

