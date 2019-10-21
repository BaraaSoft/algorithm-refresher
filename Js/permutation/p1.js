
const sum = (arr) => arr.reduce((accum, current) => accum + current, 0);

const perum = (strArry, countArr, level, result, perumArr = [], limit) => {

    if (result.length == level && (result.length >= limit)) {
        perumArr.push(result.join(''));
    }

    for (let i = 0; i < strArry.length; i++) {
        if (countArr[i] == 0) continue;

        result[level] = strArry[i];
        countArr[i]--;
        perum(strArry, countArr, level + 1, result, perumArr, limit)
        countArr[i]++;
    }
}


const permutations = [];

perum(['a', 'b', 'c'], [1, 1, 1], 0, [], permutations, sum([1, 1, 1]));

console.log(permutations);