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


const binarySearch = (nums) => {
    let left = 0;
    let right = nums.length - 1
    while (left < right) {
        let mid = left + (right - left) / 2
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }


    return left
}



console.log(binarySearch([1, 0, 2, 3, 5]))