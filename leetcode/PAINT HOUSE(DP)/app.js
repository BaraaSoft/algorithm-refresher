// https://leetcode.com/problems/paint-house/

//Input: [[17, 2, 17], [16, 16, 5], [14, 3, 19]]
//Output: 10

function minCost(costs) {
    // write your code here
    let len = costs.length;
    for (let i = 1; i < costs.length; i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2])
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2])
        costs[i][2] += Math.min(costs[i - 1][1], costs[i - 1][0])
    }

    return Math.min(costs[len - 1][0], costs[len - 1][1], costs[len - 1][2])
}


console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]))