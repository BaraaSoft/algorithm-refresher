package com.baraabytes.twoPointers;

public class Palindrome {

    public static boolean isPalindrome(String s) {
        int start = 0, end = s.length() - 1;
        while (start < end) {
            if(s.charAt(start++) != s.charAt(end--)) return false;
        }
        return true;
    }

}