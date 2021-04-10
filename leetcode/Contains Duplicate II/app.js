// https://leetcode.com/problems/contains-duplicate-ii/


var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j <= i + k; j++) {
            if (nums[j] != undefined) {
                if (nums[i] == nums[j]) return true
            }
        }
        if (i + k > nums.length) break;
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))