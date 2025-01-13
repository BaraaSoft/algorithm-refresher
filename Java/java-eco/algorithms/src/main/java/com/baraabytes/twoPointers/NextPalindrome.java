package com.baraabytes.twoPointers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class NextPalindrome {
    public static void main(String[] args){

        NextPalindrome nextPalindrome = new NextPalindrome();

        System.out.println(
                nextPalindrome.findNextPalindrome("1221")
        );
       System.out.print(
               nextPalindrome.findNextPalindrome("23143034132")+"  <23314041332>  "
       );
        System.out.println(
                nextPalindrome.findNextPalindrome("23143034132") == "23314041332"
        );
        System.out.println(
                nextPalindrome.findNextPalindrome("9999")
        );
        System.out.println(
                nextPalindrome.findNextPalindrome("7")
        );


    }


    public String findNextPalindrome(String numStr) {

        if(numStr.length() < 3) return "";

        List<Character> charList = numStr.chars()
                .mapToObj(c->(char)c)
                .collect(Collectors.toCollection(ArrayList::new));
        int i,j;
        // 123321
        if(charList.size()%2 ==0){
            j = charList.size()/2;
            i = j-1;
            // 1239321
        }else{
            j = (charList.size()/2)+1;
            i = (charList.size()/2)-1;
        }

        String result = "";

        while (i > 0 && j < charList.size()-1){
            if(charList.get(i) != charList.get(j)) break;

            int nextIVal = Integer.parseInt(String.valueOf(charList.get(i-1)));
            int iVal =  Integer.parseInt(String.valueOf(charList.get(i)));

            int k = i -1;
            int move =1;
            while( k >= 0){
                int charKVal =  Integer.parseInt(String.valueOf(charList.get(k)));
                if(charKVal < iVal){
                    swap(charList,i,k);
                    swap(charList, j,j+move);
                    result = charList.stream().map(c->String.valueOf(c)).collect(Collectors.joining());

                }
                move++;
                k--;
            }
            i--;
            j++;
        }

        return result;
    }


    public String findNextPalindromeV1(String numStr) {

        if(numStr.length() < 3) return "";

        List<Character> charList = numStr.chars()
                .mapToObj(c->(char)c)
                .collect(Collectors.toCollection(ArrayList::new));
        int i,j;
        // 123321
        if(charList.size()%2 ==0){
            j = charList.size()/2;
            i = j-1;
            // 1239321
        }else{
            j = (charList.size()/2)+1;
            i = (charList.size()/2)-1;
        }

        while (i > 0 && j < charList.size()-1){
            if(charList.get(i) != charList.get(j)) break;

            int nextIVal = Integer.parseInt(String.valueOf(charList.get(i-1)));
            int iVal =  Integer.parseInt(String.valueOf(charList.get(i)));

            if(nextIVal < iVal){
                swap(charList,i,i-1);
                swap(charList, j,j+1);
                return charList.stream().map(c->String.valueOf(c)).collect(Collectors.joining());
            }
            i--;
            j++;
        }

        return "";
    }

    public void swap(List<Character> charList,int i,int j){
        Character temp = charList.get(i);
        charList.set(i, charList.get(j));
        charList.set(j,temp);
    }
}
