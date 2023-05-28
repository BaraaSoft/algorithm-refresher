// g++ -std=c++11 -o out main3.cpp
#include <iostream>
#include <string>
#include <vector>
#include<map>

using namespace std;


string minimumWindowSubsequence(string str1,string str2);
void printAll(map<char,int>&map);
bool match(map<char,int> &mapStr2,string str);


int main(){
    
    string res1 = minimumWindowSubsequence("abcdebdde","bde");
    // string res2= minimumWindowSubsequence("fgrqsqsnodwmxzkzxwqegkndaa" , "kzed"); //"kzxwqegknd"
     //string res3= minimumWindowSubsequence("afgegrwgwga" , "aa");
    //  string res4= minimumWindowSubsequence("cnhczmccqouqadqtmjjzl" , "cm");// "czm"
    

    // cout<<res2<<endl;

    

    return 0;
}

 string minimumWindowSubsequence(string str1,string str2){
    int s1=0,s2=0;

    while(s1<str1.size()){
        if(str1[s1] == str2[s2]){
            s2++;
            if(s2 == str2.size()){
                int start = s1,end = s1;
                s2--;
                while ( s2 >= 0)
                {
                    if(str1[start] == str2[s2]){
                        s2--;
                    }
                    start--;
                }
                start++;
                cout<<">> "<<str1.substr(start,end-start+1)<<endl;
                s2=0; 
            }
        }
        s1++;
    }
 }


void printAll(map<char,int>&map){
    for(auto &itr:map){
        cout<<itr.first<<":"<<itr.second<<endl;
    }
    cout<<"------------"<<endl;
}
