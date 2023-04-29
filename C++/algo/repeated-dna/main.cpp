// g++ -std=c++11 -o out main.cpp

#include<iostream>
#include<string>
#include<set>
using namespace std;


set<string> findRepeatedSequences(string str,int k);

int main(){

    set<string> mySet=findRepeatedSequences("AGAGCTCCAGAGCTTG",6);
    return 0;
}

set<string> findRepeatedSequences(string str,int k){

    set<string>result{};
    set<string>mainSet{};
    string window = "";
    int j=0;
    for(int i =1;i<str.length(); i++){
         int len= i-j+1;
         if(len >= k){
            string st = str.substr(j,len);
            if(mainSet.find(st)!= mainSet.end()){
                result.insert(st);
                 cout<<st<<endl;
            }
            mainSet.insert(st);
            j++;
         }
    }

    return result;
}