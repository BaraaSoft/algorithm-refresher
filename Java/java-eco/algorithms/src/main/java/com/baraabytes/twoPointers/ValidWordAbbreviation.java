package com.baraabytes.twoPointers;

public class ValidWordAbbreviation {
    public static void main(String[] args){

        ValidWordAbbreviation validWordAbbreviation= new ValidWordAbbreviation();
        System.out.println(validWordAbbreviation.verify(
                "innovation","in5ion"
        ));
        System.out.println(validWordAbbreviation.verify(
                "obedience","obe3nce"
        ));


        System.out.println(validWordAbbreviation.verify(
                "internationalization","13iz4n"
        ));


        System.out.println(validWordAbbreviation.verify(
                "mindset","min3set"
        ));

        System.out.println(validWordAbbreviation.verify(
                "bcnwrhcp","08drbff0"
        ));

    }


    public boolean verify(String word,String abbr){
        int wordIndex =0, abbrIndex =0;

        while(wordIndex < word.length()  && abbrIndex < abbr.length()){
            char wordChar = word.charAt(wordIndex);
            char abbrChar = abbr.charAt(abbrIndex);
            boolean hasNum = false;
            int prevAbbrIndex = abbrIndex;

            if(abbrChar == '0') return false;
            if(!Character.isDigit(abbr.charAt(abbrIndex) ) && wordChar != abbrChar ) return  false;

            while ( abbrIndex < abbr.length() && Character.isDigit(abbr.charAt(abbrIndex)) ){
                abbrIndex++;
                hasNum = true;
            }

            if(hasNum){
                int num = Integer.parseInt(abbr.substring(prevAbbrIndex,abbrIndex));
                wordIndex += num;
            }else{
                wordIndex++;
                abbrIndex++;
            }
        }

        return  wordIndex == word.length() &&  abbrIndex == abbr.length();
    }


    private boolean isNumber(String numStr){
        if(numStr == null) return  false;
        try{
            Integer.parseInt(numStr);
        }catch (NumberFormatException e){
            return  false;
        }
        return true;
    }


}
