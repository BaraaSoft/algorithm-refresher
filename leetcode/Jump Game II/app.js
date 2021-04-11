// https://leetcode.com/problems/jump-game-ii/

var jump = function (nums) {

    let farthest = 0, jumps = 0, lastJumpEnd = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i == lastJumpEnd) {
            lastJumpEnd = farthest;
            jumps++;
        }
    }

    return jumps++;


};