package com.baraabytes.twoPointers;
import java.util.ArrayList;
import java.util.stream.Collectors;

public class MinimumNumberOfMovePalindrome {

    public static void main(String[] args){

        MinimumNumberOfMovePalindrome movePalindrome = new MinimumNumberOfMovePalindrome();

        System.out.println(movePalindrome.correctMoves("xcxoxoc"));
        System.out.println(movePalindrome.correctMoves("ccxx"));
        System.out.println(movePalindrome.correctMoves("aabb"));
    }


    public int correctMoves(String numStr){

        ArrayList<Character> listStr = numStr.chars().mapToObj(c->(char)c).collect(Collectors.toCollection(ArrayList::new));
        int numOfmoves =0;
        while (!listStr.isEmpty()){
            Character lastChar = listStr.get( listStr.size()-1 );
            int index = listStr.indexOf(lastChar);

            // case: abab[c]
            if( index ==   listStr.size()-1 ) numOfmoves +=  (listStr.size()/2);
            // case: aba[b]
            //        ^
            //     (index)
            else {
                numOfmoves += index;
                listStr.remove(index);
            }
            listStr.remove( listStr.size()-1);
        }

        return  numOfmoves;
    }



    public int numberOfMoves(String numStr){

        int i=0,j= numStr.length()-1,k=numStr.length()-1;
        char[] charArr = numStr.toCharArray();
        int moves = 0;
        while(i < j){

            while(charArr[i] != charArr[k]){
                k--;
            }

            if(charArr[i] == charArr[k]){
                while(k < j){
                    swap(charArr,k,k+1);
                    k++;
                    moves++;
                }

                if(i==k){
                    moves += (charArr.length /2) -i;
                }
            }


            j--;
            k =j;
            i++;

        }
        return moves;
    }

    public void swap(char[] charArr,int k , int j){
        char temp = charArr[k];
        charArr[k] = charArr[j];
        charArr[j]= temp;
    }
}
