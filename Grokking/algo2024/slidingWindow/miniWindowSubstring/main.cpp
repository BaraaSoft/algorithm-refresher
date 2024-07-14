#include<iostream>
#include<map>
#include<string>
#include<string_view>
#include<utility>
#include<set>


using namespace std;
// g++ -std=c++11 -o out main.cpp


string minWindow(string s, string t);

int main(){

    string result = minWindow("cabwefgewcwaefgcf","cae");
    cout<<">> "<< result<<endl;
    return 0;
}

void print_map(string_view comment,map<char,int>dict){
    cout<<comment<<" ";
    for(pair<char,int> pr:dict){
        cout<<"{"<<pr.first<<":"<<pr.second<<"}, ";
    }
    cout<<endl;
}


string minWindow(string s, string t){
    map<char,int> charFreqT{};
    map<char,int> window{};
    for(auto ch= t.begin(); ch != t.end();ch++ ){
        if(charFreqT.find(*ch)== charFreqT.end()){
            charFreqT[*ch] =0;
            window[*ch]=0;
        }else{
            charFreqT[*ch] += 1;
        }
    }

    int currMatchSize = 0;
    int requiredMatchSize = charFreqT.size();

    int l=0;
    string minStr = "";
    int minStrLen= INT_MAX;

    for(int r=0; r<s.length();r++){
        char ch = s[r];
        if(charFreqT.find(ch) != charFreqT.end()){
            if(window.at(ch) == charFreqT.at(ch)){
                currMatchSize++;
            }
            window[ch] += 1;
        }
       
       
        if(r < t.size() -1)continue;
        while (currMatchSize >= requiredMatchSize && l < r)
        {
            char lchar = s[l];
            string currStr = s.substr(l, r-l+1);
           
            if( currStr.size() < minStrLen){
                minStrLen = currStr.size();
                minStr = currStr;
            }
          
            if(charFreqT.find(lchar)!= charFreqT.end()){
                window[lchar] -=1;
                if(window[lchar] < 2){
                    window[lchar]=0;
                    currMatchSize--;
                }
            }

            l++;
           
        }
        
    }

    return minStr;
}
