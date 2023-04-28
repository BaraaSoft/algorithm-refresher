// g++ -std=c++11 -o out main.cpp

#include<iostream>
#include<string>

using namespace std;


bool validPalindrome(string &word,int l,int r,int count);

int main(){

    string word1 = "RACEXXFCAR";
     string word = "RACEACAR";
    string isValid= validPalindrome(word,0,word.size()-1,0)?"true":"false";
    string isValid1= validPalindrome(word1,0,word1.size()-1,0)?"true":"false";

    cout<<"is palindrome: "<<isValid<<endl;
    cout<<"is palindrome: "<<isValid1<<endl;



    return 0;
}


bool validPalindrome(string &word,int l,int r,int count){
    if(count>1)return false;
    while(l<r){
        if(word[l]==word[r]){
            l++;
            r--;
        }else{
            return validPalindrome(word,l+1,r,count+1)||validPalindrome(word,l,r-1,count+1);
        }
        
    }
    return true;
}