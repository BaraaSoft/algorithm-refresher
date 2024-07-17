#include<iostream>
#include<string>
#include<map>

using namespace std;
// g++ -std=c++11 -o out main.cpp


int findLongestSubstring(string str);

int main(){

    int res = findLongestSubstring("conceptoftheday");
    int res1 = findLongestSubstring("aba");

    cout<<">> findLongestSubstring (8): "<<res<<endl;
    cout<<">> findLongestSubstring (2): "<<res1<<endl;
    return 0;
}



int findLongestSubstring(string str){

    map<char,int> window{};

    int maxStrLen = 1;
    int l=0;
    for(int r=0;r<str.size();r++){
        char rch = str[r]; 
        window[rch] +=1;

        while(window[rch] >=2){
            char lchar = str[l];
            window[lchar]--;
            l++;
        }

        int currLen = r-l+1;
        if(currLen > maxStrLen) maxStrLen= currLen;
    }
   return maxStrLen;
}
