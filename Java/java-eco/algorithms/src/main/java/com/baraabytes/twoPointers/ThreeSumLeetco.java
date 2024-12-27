package com.baraabytes.twoPointers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class ThreeSumLeetco {
    public List<List<Integer>> threeSum(int[] nums) {

        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        HashSet<String> seen = new HashSet<>();


        for(int i=0;i<nums.length-2;i++){
            int start = i+1;
            int end = nums.length -1;
            while(start < end){
                int currSum = nums[i]+nums[start]+nums[end];
                String key = "x"+nums[i]+nums[start]+nums[end];
                if(currSum == 0 && !seen.contains(key)) {
                    res.add(Arrays.asList(nums[i],nums[start],nums[end]));
                    seen.add(key);
                }
                if(currSum > 0) end--;
                else start++;
            }

        }
        return res;
    }
}
