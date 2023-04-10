// g++ -o out main.cpp

#include <iostream>
#include <string>
using namespace std;

// Valid Palindrome

int main(){
    string str = "The is very long string";

    cout<<"size of string"<<str.length()<<endl;
    return 0;
}


bool IsPalindrome(string inputString)
{
    // Write your code here

    
    int i =0;
    int j = inputString.size()-1;
    while( i < j){
        if(inputString[i++] != inputString[j--]){
            return false;
        }
    }
    return true;
}