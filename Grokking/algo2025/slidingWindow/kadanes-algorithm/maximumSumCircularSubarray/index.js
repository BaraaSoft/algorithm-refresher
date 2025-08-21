
// https://leetcode.com/problems/maximum-sum-circular-subarray/
var maxSubarraySumCircular = function (nums) {

    let maxSum = nums[0];
    let minSum = nums[0];

    let currMax = 0;
    let currMin = 0;
    let total = 0;


    for (let i = 0; i < nums.length; i++) {
        currMax = Math.max(currMax + nums[i], nums[i]);
        currMin = Math.min(currMin + nums[i], nums[i]);


        maxSum = Math.max(maxSum, currMax);
        minSum = Math.min(minSum, currMin);


        total += nums[i];
    }

    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum

};