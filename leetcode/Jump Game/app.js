// https://leetcode.com/problems/jump-game/


var canJump = function (nums) {

    let reachable = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > reachable) return false
        let dist = i + nums[i]
        reachable = Math.max(dist, reachable)
    }
    return reachable >= nums.length - 1 || (reachable == 0 && nums.length == 1)
};

