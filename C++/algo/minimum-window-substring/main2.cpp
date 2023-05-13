// g++ -std=c++11 -o out main2.cpp
#include<iostream>
#include<string>
#include<vector>
#include<map>
#include <type_traits>

using namespace std;

string minWindow(string s, string t);
void printMap(map<char,int> mapStr);

template<typename T>
struct console
{
   static void log(string str,T str2){
        cout<<str<<": "<<(str2)<<endl;
   }
};


int main(){

    string res = minWindow("cabwefgewcwaefgcf","cae");// cwae
    // string res = minWindow("STRIKER","RK"); //RIK
    // string res = minWindow("DFFDFDFVD","VDD");
    //string res1 = minWindow("AAAAAAAAAAA","A");

    cout<<">> "<<res<<endl;
    // cout<<">> "<<res1<<endl;
    return 0;
}

string minWindow(string s, string t){

    map<char,int> mapstr{};
    map<char,int> mapt{};

    for(char &ch:t){
        if(mapt.find(ch)== mapt.end()){
            mapt[ch]=1;
        }else{
            mapt[ch]++;
        }
    }

    int requiredStrLen= mapt.size(); // **** THE Most Important Line **** //
    int matchedLen=0;

    int miniLenMatched=INT_MAX;
    int left=0;
    string resStr = "";

    for(int i=0; i<s.size();i++){
        char ch = s[i];
        if(mapstr.find(ch)== mapstr.end()){
            mapstr[ch]=1;
        }else{
            mapstr[ch]++;
        }
        if(mapstr[ch]== mapt[ch]){ 
            matchedLen++;
        }

        while (left < s.size() && matchedLen >= requiredStrLen)
        {
            if(i-left+1 < miniLenMatched){
                resStr= s.substr(left,i-left+1);
                miniLenMatched = i-left+1;
            }
            char lch = s.at(left);

            if(mapstr[lch]&&mapstr.find(lch) != mapstr.end()){
                mapstr[lch]--;
            }
        
            if(mapt[lch] && mapstr[lch]<mapt[lch]){
                matchedLen--;
            }
    
            left++;
        }

    }

    return resStr;
}



void printMap(map<char,int>mapStr){
    for(auto &itr:mapStr){
        cout<<">> "<<itr.first<<":"<<itr.second<<endl;
    }
    cout<<"-----"<<endl;
}