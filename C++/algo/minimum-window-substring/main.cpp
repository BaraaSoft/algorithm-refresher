// g++ -std=c++11 -o out main.cpp

#include<iostream>
#include<string>
#include<map>

using namespace std;


string minWindow(string s, string t);
void printMap(map<char,int>mapStr);
bool fullMatch(map<char,int>mapT,map<char,int>mapS);

int main(){

    string res = minWindow("cabwefgewcwaefgcf","cae");
    string res1 = minWindow("AAAAAAAAAAA","A");

    cout<<">> "<<res<<endl;
    cout<<">> "<<res1<<endl;

    return 0;
}

string minWindow(string s, string t){
    map<char,int> mapS{};
    map<char,int> mapT{};
    for(auto &itr:t){
        if(mapT.find(itr) == mapT.end()){
            mapT[itr] =1;
        }else{
            mapT[itr]++;
        }
    }

   
    int minLength= INT_MAX;
    string minStr ="";
    int start=0;
    for (int i = 0; i < s.length(); i++)
    {
        char ch = s[i];
        if(mapS.find(ch) == mapS.end()){
            mapS[ch] =1;
        }else{
            mapS[ch]++;
        }

        while(start <= i && fullMatch(mapT,mapS)){
           
            if(i - start+1 < minLength ){
                minStr = s.substr(start,i-start+1);
                minLength= i-start+1;
            }
            mapS[s[start++]]--;
        }
       
    }
    
    return minStr;
}

bool fullMatch(map<char,int>mapT,map<char,int>mapS){

    for(auto &itr:mapT){
        if(itr.second > mapS[itr.first]) return false;
    }


    return true;
}
void printMap(map<char,int>mapStr){
    for(auto &itr:mapStr){
        cout<<">> "<<itr.first<<":"<<itr.second<<endl;
    }
    cout<<"-----"<<endl;
}