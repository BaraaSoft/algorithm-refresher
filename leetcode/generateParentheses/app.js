
// Generate Parentheses
//https://leetcode.com/problems/generate-parentheses/

const solve = (open, close) => {
    if (open == 0 && close == 0) return [[]];

    let resultArr = [];

    if (open >= 0) {
        let res = solve(open - 1, close)
        res = res.map(x => "(" + x)
        resultArr.push(...res)
    }

    if (close > open) {
        let res = solve(open, close - 1)
        res = res.map(x => ")" + x)
        resultArr.push(...res)
    }

    return resultArr
}

console.log(solve(3, 3))