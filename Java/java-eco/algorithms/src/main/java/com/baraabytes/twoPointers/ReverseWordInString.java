package com.baraabytes.twoPointers;

import java.util.Arrays;

public class ReverseWordInString {

    public String reverseWords(String s) {
       String[] strArr =  s.split(" ");
       String[] arr = Arrays.stream(strArr).filter(x -> !x.isEmpty()).toArray(String[]::new);
       return  reverse(arr,0).trim();
    }


    public String reverse(String[] arr,int index){
        if(index == arr.length) return "";

        String str = reverse(arr,index+1) +" "+arr[index];

        return str;
    }

    public static void main(String[] args) {
        ReverseWordInString reverseWordInString = new ReverseWordInString();

        System.out.println(reverseWordInString.reverseWords("Reverse this string"));
        System.out.println(reverseWordInString.reverseWords("The quick brown fox jumped over a lazy dog"));

    }
}
