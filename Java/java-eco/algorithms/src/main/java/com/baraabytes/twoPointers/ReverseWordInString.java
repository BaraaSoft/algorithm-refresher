package com.baraabytes.twoPointers;

import java.util.ArrayList;
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


    public String reverse(String s,int start,int end){
        char[] str = s.toCharArray();
        while(start < end){
            char temp = str[start];
            str[start++]= str[--end];
            str[end]= temp;
        }
        return String.copyValueOf(str);
    }
    public void reverse(char[] str,int start,int end){
        while(start < end){
            char temp = str[start];
            str[start++]= str[--end];
            str[end]= temp;
        }
    }

    public String reverseWord(String s){
        char[] str = s.toCharArray();
        reverse(str,0,str.length);
        int start = 0,end=0;

        while(end <= str.length){
            if( end == str.length || str[end] == ' ' ){
                reverse(str,start,end);
                end++;
                start = end;
            }else{
                end++;
            }
        }
        return String.copyValueOf(str);
    }

    public static void main(String[] args) {
        ReverseWordInString reverseWordInString = new ReverseWordInString();

        System.out.println(reverseWordInString.reverseWords("Reverse this string"));
        System.out.println(reverseWordInString.reverseWords("The quick brown fox jumped over a lazy dog"));

        System.out.println(reverseWordInString.reverseWord("Reverse this string"));

    }
}
