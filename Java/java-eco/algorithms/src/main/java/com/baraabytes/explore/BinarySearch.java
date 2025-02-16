package com.baraabytes.explore;

public class BinarySearch {

    public static void main(String[] args){
        BinarySearch binarySearch = new BinarySearch();

        System.out.println(
                binarySearch.binarySearchLowerBound(
                        new int[]{1,2,3,4,6,6,8,11 },
                        6
                )
        );

        System.out.println(
                binarySearch.binarySearchUpperBound(
                        new int[]{1,2,3,4,6,6,8,11 },
                        6
                )
        );
    }

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



    public int binarySearchLowerBound(int[] arr, int target){
        int start=0;
        int end = arr.length;
        while (start < end){
            int mid = ((start + end) / 2);

            if(arr[mid] < target) start = mid+1;
            else end = mid;
        }

        if(start == arr.length) return  -1;

        return start;
    }
}
