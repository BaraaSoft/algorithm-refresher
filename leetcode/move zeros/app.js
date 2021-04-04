// https://leetcode.com/problems/move-zeroes/


var moveZeroes = function (nums) {
    for (let i = 0, z = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let postIndex = z++;
            let curr = nums[i];
            let post = nums[postIndex];
            nums[i] = post
            nums[postIndex] = curr
        }
    }
    return nums
};



console.log(moveZeroes([0, 1, 0, 3, 12]))