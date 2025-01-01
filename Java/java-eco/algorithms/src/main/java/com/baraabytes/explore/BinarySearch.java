package com.baraabytes.explore;

public class BinarySearch {


    public int binarySearchUpperBound(int[] arr, int target){
        int start=0;
        int end = arr.length;
        while (start < end){
            int mid = ((start + end) / 2);

            if(arr[mid] <= target){
                start = mid+1;
            }else{
                end = mid;
            }
        }

        if(start == arr.length) return  -1;

        return start;
    }
}
