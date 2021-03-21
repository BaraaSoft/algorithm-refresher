
// Find fewest coin to make change

const solve = (arr, num) => {
    if (num == 0) return [[]]

    let finalRes = []
    for (let coin of arr) {
        let remainder = num - coin;
        if (remainder >= 0) {
            let res = solve(arr, remainder)
            let resArr = res.map(x => [...x, coin]);
            let smallest = finalRes[0];
            if (!finalRes[0] || (resArr[0].length) < smallest.length) {
                finalRes.push(...resArr)
                finalRes = finalRes.slice(-1)
            }
        }
    }

    return finalRes
}



//console.log(solve([1, 5, 5], 16))

//console.log([7].slice(-1))