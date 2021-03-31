// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function (nums) {
    let peak = 0, left, center, right;

    if (nums.length <= 1) return 0
    if (nums.length <= 2) return nums[0] < nums[1] ? 1 : 0



    for (let i = 0; i < nums.length; i++) {
        left = nums[i - 1] || Number.MIN_VALUE
        center = nums[i]
        right = nums[i + 1] || Number.MIN_VALUE
        if (center > left && center > right) {
            peak = i
        }
    }

    return peak

};