package com.baraabytes.twoPointers;

public class ValidWordAbbreviation {
    public static void main(String[] args){

        ValidWordAbbreviation validWordAbbreviation= new ValidWordAbbreviation();
//        System.out.println(validWordAbbreviation.validWordAbbreviation(
//                "innovation","in5ion"
//        ));
//        System.out.println(validWordAbbreviation.validWordAbbreviation(
//                "obedience","obe3nce"
//        ));
//        System.out.println(validWordAbbreviation.validWordAbbreviation(
//                "mindset","min3set"
//        ));

        System.out.println(validWordAbbreviation.validWordAbbreviation(
                "internationalization","13iz4n"
        ));

    }

    public boolean validWordAbbreviation(String word,String abbr){

        for (int i = 0; i < abbr.length(); i++) {
            int right=i;
            while (isNumber(String.valueOf(abbr.charAt(right)))){
                right++;
            }
           if(isNumber(abbr.substring(i,right) )){
               Integer num = Integer.parseInt(abbr.substring(i,right));


               String abbrLeftSubstr = abbr.substring(0,i);
               String abbrRightSubstr = abbr.substring(right);

               String wordLeftSubstr = word.substring(0,i);
               String wordRightSubstr = word.substring(right+num-1);

               if(abbrLeftSubstr.length() + abbrRightSubstr.length()+ num != word.length()) return false;

               return abbrLeftSubstr.equals(wordLeftSubstr) && abbrRightSubstr.equals(wordRightSubstr);


           }
        }
        return  true;
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
