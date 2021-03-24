// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/



var maxProfit = function (arr) {

    let min = Number.MAX_VALUE;
    let profit = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else {
            profit += (arr[i] - min)
            min = arr[i]
        }

    }

    return profit
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))