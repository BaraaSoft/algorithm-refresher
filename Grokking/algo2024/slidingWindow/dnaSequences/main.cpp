#include<iostream>
#include<map>
#include<utility>
#include<vector>
#include<set>
#include<string>

using namespace std;
// g++ -std=c++11 -o out main.cpp
set<string> findRepeatedSequences(string s,int k);

int main(){

    auto results = findRepeatedSequences("AAAAACCCCCAAAAACCCCCC" , 8);

    for(auto it= results.begin(); it != results.end(); it++){
        cout<<*it<<", ";
    }
    cout<<endl;
    return 0;
};



set<string> findRepeatedSequences(string s,int k){

    set<string> output{};
    set<string> onePass{};
    int start=0;
    for(int i=0; i<s.size(); i++){
        if(i>= k-1){
            string dnaStr = s.substr(start,k);
            auto it = onePass.find(dnaStr);
            if(it == onePass.end()){
                onePass.insert(dnaStr);
            }else{
                output.insert(dnaStr);
            }
            start++;
        }
    }

    return output;
}