// https://leetcode.com/problems/house-robber/


// Brute force approach

var rob = function (nums) {
    return traverse(nums)
};

const traverse = (nums) => {
    if (nums.length < 1) return 0;

    return Math.max(
        nums[0] + traverse(nums.slice(2)),
        traverse(nums.slice(1))
    )
}


// DP approach 
// solution from
// https://medium.com/outco/how-to-solve-the-house-robber-problem-f3535ebaef1b

var rob = function (nums) {
    let max = []
    for(let i = 0;i<nums.length;i++){
        let prev =  max[i-1] || 0;
        let prevTwo = max[i-2] || 0;
        max.push(Math.max(nums[i]+prevTwo,prev))
    }

    return max[max.length-1]
};