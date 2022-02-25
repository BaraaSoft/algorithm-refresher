var search = function (nums, target) {
    return bsearch()
    // return binarySearch(nums, 0, nums.length, target)
};



const bsearch = (nums,target,l,h)=>{ // h = nums.length -1

    if(h >= l){
        const mid = l + Math.floor((h - l)/2)

        if(nums[mid] == target){
            return mid
        }
        if (nums[mid] > target){
            return bsearch(nums,target,l,mid - 1)
        }

        return bsearch(nums, target, mid + 1, h)
    }

    return -1;

} 

console.log(bsearch([12,29,223,50,100,7],7,0,5))