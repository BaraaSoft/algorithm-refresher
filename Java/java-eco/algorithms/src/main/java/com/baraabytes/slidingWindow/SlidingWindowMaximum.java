package com.baraabytes.slidingWindow;

import java.util.*;
import java.util.stream.Collectors;

public class SlidingWindowMaximum {

    public static void main(String[] args){

        SlidingWindowMaximum slidingWindowMaximum = new SlidingWindowMaximum();


        slidingWindowMaximum.findMaxSlidingWindow(
                new int[]{-4, 5, 4, -4, 4, 6, 7, 20},
                2

        );

    }


    public int[] findMaxSlidingWindow(int[] nums, int w) {

        Deque<Integer> queue = new ArrayDeque<>();
        List<Integer> res = new ArrayList<>();


        int tail =0;
        for(int i =0;i<nums.length;i++){
            int num = nums[i];

            while (!queue.isEmpty() && num > nums[queue.peekLast()] ){queue.removeLast();}

            queue.addLast(i);

            if(queue.peekFirst() < tail) queue.removeFirst();
            if(i >= w-1){
                res.add( nums[queue.peekFirst()]);
                tail++;
            }
        }


        return res.stream().mapToInt(x->x).toArray();
    }



}
