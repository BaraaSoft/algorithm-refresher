// g++ -std=c++11 -o out main.cpp
#include <iostream>
#include <string>
#include <vector>
#include<map>

using namespace std;


string minimumWindowSubsequence(string str1,string str2);
void printAll(map<char,int>&map);
bool match(map<char,int> &mapStr2,string str);


int main(){
    
    //string res1 = minimumWindowSubsequence("abcdebdde","bde");
    string res2= minimumWindowSubsequence("fgrqsqsnodwmxzkzxwqegkndaa" , "kzed"); //"kzxwqegknd"
     //string res3= minimumWindowSubsequence("afgegrwgwga" , "aa");
    //  string res4= minimumWindowSubsequence("cnhczmccqouqadqtmjjzl" , "cm");// "czm"
    

    cout<<res2<<endl;

    

    return 0;
}

 string minimumWindowSubsequence(string str1,string str2){

   map<char,int> charMap{};
    map<char,int> charMap2{};
    for(char &ch:str1){
        if(charMap.find(ch)!=charMap.end()){
            charMap[ch]++;
        }else{
            charMap[ch]=1;
        }
    }
    for(char &ch:str2){
        if(charMap2.find(ch)!=charMap2.end()){
            charMap2[ch]++;
        }else{
            charMap2[ch]=1;
        }
    }

    char ch1=str2.at(0);
    char ch2=str2.at(str2.length()-1);
    vector<string> result{};
    int minLength= INT_MAX;
    for (int i = 0; i < str1.length(); i++)
    {
       
        int j= str1.length()-1;
        if(ch1 == str1.at(i)){
            int leftCharCount= charMap[ch2];
            while(charMap[ch2]>= charMap2[ch2] && j > i){
                string matchedStr= str1.substr(i,j-i+1);

                if(matchedStr.length() < minLength && match(charMap2,matchedStr)){
                    result.push_back(matchedStr);
                    minLength = matchedStr.length();
                }
               charMap[str1.at(j--)]--;
            }
            charMap[ch2]= leftCharCount;
        }

        charMap[str1.at(i)]--;
    }
    return result.empty()?"": result.back();
 }


 bool match(map<char,int> &mapStr2,string str){
    map<char,int>mapStr{};
    for(auto &itr:str){
        if(mapStr.find(itr) == mapStr.end()){
            mapStr[itr] =1;
        }else{
            mapStr[itr]++;
        }
    }
    for(auto &itr:mapStr2){
       if(itr.second > mapStr[itr.first]){
         return false;
       }
    }
    return true;
 }


void printAll(map<char,int>&map){
    for(auto &itr:map){
        cout<<itr.first<<":"<<itr.second<<endl;
    }
    cout<<"------------"<<endl;
}
