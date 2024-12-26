package com.baraabytes.twoPointers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ThreeSum {



    public static boolean findSumOfThree(int[] nums, int target) {
        Arrays.sort(nums);
        int start=0,end=nums.length-1;


        while(start < end) {
            for (int i = start + 1; i < end; i++) {
                int currSum = nums[start] + nums[i] + nums[end];
                if (currSum == target) return true;
            }

            if(nums[start]+ nums[start+1] + nums[end] > target) end--;
            else start++;
        }

        return false;
    }

    public static void main(String[] args) {
        boolean res = ThreeSum.findSumOfThree(new int[]{3, 7, 1, 2, 8, 4, 5},20);
        ArrayList<Integer> list = new ArrayList<>();
        System.out.println(res);
    }

}
