// g++ -std=c++11 -o out main2.cpp
#include <iostream>
#include <string>
#include <vector>
#include<map>

using namespace std;


string minimumWindowSubsequence(string str1,string str2);
void printAll(map<char,int>&map);



int main(){
    string res1 = minimumWindowSubsequence("abcdebdde","bde");
    cout<<"res: "<<res1<<endl;
    res1= minimumWindowSubsequence("fgrqsqsnodwmxzkzxwqegkndaa" , "kzed");
    cout<<"res: "<<res1<<endl;
    res1= minimumWindowSubsequence("cnhczmccqouqadqtmjjzl" , "cm");
    cout<<"resx: "<<res1<<endl;
    res1= minimumWindowSubsequence("afgegrwgwga" , "aa");
    cout<<"res: "<<res1<<endl;
    res1= minimumWindowSubsequence("cnhczxmccqouqadqtmjjczml" , "cm");
    cout<<"res: "<<res1<<endl;
    return 0;
}


string minimumWindowSubsequence(string str1, string str2){
    int s1=0,s2=0;
    string result ="";
    int resultLen=INT_MAX;
    while(s1 < str1.length()){
        if(s2 < str2.length() && str1.at(s1)== str2.at(s2)){
            s2++;
            if(s2 >= str2.length()){
                s2--;
                int start=s1,end=s1+1;
                while(s2 >= 0){
                    if(str1.at(start)== str2.at(s2)){
                        s2--;
                    }
                    start--;
                }
                start++;
                if(end-start<resultLen){
                    result = str1.substr(start,end-start);
                    resultLen = end-start;
                }
                s2=0;
            }          
        }
        s1++;

    }
    return result;
}