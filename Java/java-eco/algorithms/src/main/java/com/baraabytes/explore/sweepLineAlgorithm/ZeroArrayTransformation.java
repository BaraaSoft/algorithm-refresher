package com.baraabytes.explore.sweepLineAlgorithm;

import java.util.HashMap;


// Reference [https://leetcode.com/problems/zero-array-transformation-i/solutions/6053299/sweep-line/?envType=company&envId=google&favoriteSlug=google-three-months]
public class ZeroArrayTransformation {

    public static void main(String[] args){

        ZeroArrayTransformation arrayTransformation = new ZeroArrayTransformation();

        System.out.println(
                arrayTransformation.isZeroArray(
                        new int[]{4,3,2,1},
                        new int[][]{{1,3},{2,0}}
                )
        );

    }


    public boolean isZeroArray(int[] nums, int[][] queries) {

        HashMap<Integer,Integer> freq = new HashMap<>();

        for(int[] interval: queries){
            Integer start = interval[0];
            Integer end = interval[1] +1;
            freq.putIfAbsent(start,0);
            freq.putIfAbsent(end,0);

            freq.put(start,freq.get(start)+1);
            freq.put(end,freq.get(end)-1);
        }

        int length =0;
        for(int i=0;i<nums.length;i++){
            length += freq.getOrDefault(i,0);
            if(length < nums[i]) return  false;
        }

        return true;
    }

}
