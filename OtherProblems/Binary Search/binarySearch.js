// 704. Binary Search

var search = function (nums, target) {
    return bsearch(nums, target, 0, nums.length - 1)
    // return binarySearch(nums, 0, nums.length, target)
};



const bsearch = (nums, target, l, h) => {
    if (h >= l) {

        let mid = l + Math.floor((h - l) / 2);


        if (nums[mid] == target) return mid;
        // mid is garante not a solution, so (m -1) to shrik search space.
        if (nums[mid] > target) return bsearch(nums, target, l, mid - 1)
        //mid is garante not a solution so (m + 1) to shrik search space.
        return bsearch(nums, target, mid + 1, h)
    }

    return -1;


}