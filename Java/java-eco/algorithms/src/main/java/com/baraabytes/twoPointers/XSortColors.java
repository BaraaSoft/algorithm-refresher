package com.baraabytes.twoPointers;

final public class XSortColors {

    public void sortColors(int[] nums) {
        int start =0,end=nums.length-1;
        int curr =0;
        while(curr <= end){
            if(nums[curr]==0){
                int temp = nums[curr];
                nums[curr++] = nums[start];
                nums[start++]= temp;
            }
            else if(nums[curr] == 2){
                int temp = nums[curr];
                nums[curr] = nums[end];
                nums[end--]= temp;
            }else{
                curr++;
            }

        }
    }
}
