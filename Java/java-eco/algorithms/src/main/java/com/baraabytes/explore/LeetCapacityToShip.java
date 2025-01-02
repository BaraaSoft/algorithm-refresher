package com.baraabytes.explore;

import java.util.Arrays;
import java.util.List;

/*
  [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/]
 */
public class LeetCapacityToShip {
    public static void  main(String [] args){
        LeetCapacityToShip capacityToShip = new LeetCapacityToShip();

        System.out.println(capacityToShip.shipWithinDays(
                new int[]{3,2,2,4,1,4},3
        ));

        System.out.println(capacityToShip.shipWithinDays(
                new int[]{1,2,3,4,5,6,7,8,9,10},5
        ));
    }

    public int getNumOfDays(int[] weights ,int limit){
        int curWeightSum=0;
        int numOfDays =1;
        for(var w : weights){
            curWeightSum += w;
            if(curWeightSum > limit){
                curWeightSum =w;
                numOfDays++;
            }
        }
        return  numOfDays;
    }
    public int shipWithinDays(int[] weights, int days) {
        int totalWeight = Arrays.stream(weights).sum();
        int maxWeight = Arrays.stream(weights).max().orElse(0);

        int l = maxWeight,r=totalWeight;
        while (l < r){
            int mid = (l+r)/2;
            int numOfDays = this.getNumOfDays(weights,mid);

            if(numOfDays <= days) r = mid;
            else l = mid+1;
        }
        return l;
    }
}
