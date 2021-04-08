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


const findPeakUsingBinarySearch = (nums) => {
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



function findStartOfRepeatingElm(arr, elm) {
    let left = 0;
    let right = arr.length - 1;
    let res = -1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] == elm) {
            res = mid
            right = mid - 1
        }
        else if (arr[mid] > elm) right = mid - 1
        else left = mid + 1
    }
    return res
}
//console.log(findStartOfRepeatingElm([1, 2, 2, 3, 3, 3, 5], 3))


/* Detect number of rotation to sorted array */
function numberOfRotation(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] > arr[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}
//console.log(numberOfRotation([12, 2, 3, 5, 8, 11]))


//console.log(binarySearch([2, 4, 5, 8, 10], 2))
//console.log(binarySearch([1, 0, 2, 3, 5]))