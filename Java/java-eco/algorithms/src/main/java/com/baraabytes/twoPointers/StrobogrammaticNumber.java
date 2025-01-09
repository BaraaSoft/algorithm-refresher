package com.baraabytes.twoPointers;

import java.util.Map;

public class StrobogrammaticNumber {

    public static void main(String[] args){
        StrobogrammaticNumber strobogrammaticNumber = new StrobogrammaticNumber();

        System.out.println(
                strobogrammaticNumber.isStrobogrammatic(
                        "808"
                )
        );



        System.out.println(
                strobogrammaticNumber.isStrobogrammatic(
                        "69"
                )
        );
        System.out.println(
                strobogrammaticNumber.isStrobogrammatic(
                        "33"
                )
        );

        System.out.println(
                strobogrammaticNumber.isStrobogrammatic(
                        "868"
                )
        );


        System.out.println(
                strobogrammaticNumber.isStrobogrammatic(
                        "123"
                )
        );


    }


    public boolean isStrobogrammatic (String num)
    {
        Map<Character,Character> strobMap = Map.of(
                '9','6',
                '8','8',
                '6','9',
                '0','0',
                '1','1'
        );

        int start=0,end= num.length()-1;

        while (start < end){
            Character lchar = num.charAt(start);
            Character rchar = num.charAt(end);

            if(!strobMap.containsKey(lchar)) return false;
            if(lchar != strobMap.getOrDefault(rchar,rchar)) return false;

            start++;
            end--;
        }

        if(start == end){
            if(!strobMap.containsKey(num.charAt(start))) return false;
            if(num.charAt(start) == '6' || num.charAt(start) == '9') return false;
        }


        return true;
    }



}
