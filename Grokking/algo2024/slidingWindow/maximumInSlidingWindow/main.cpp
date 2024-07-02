#include<iostream>
#include<map>
#include<utility>
#include<vector>
#include<set>
#include<string>
#include<queue>

using namespace std;
// g++ -std=c++11 -o out main.cpp


vector<int> findMaxSlidingWindow(vector<int>& arr, int k);

int main(){
    vector<int> list{1,2,3,4,5,6,7,8,9,10};
    auto results = findMaxSlidingWindow(list,3);
    for(auto it = results.begin(); it != results.end();it++){
        cout<<*it<<", ";
    }
    cout<<endl;
    return 0;
}


vector<int> findMaxSlidingWindow(vector<int>&arr,int k){

    int maxEncounter = 0;
    vector<int> output{};
    int start =-10e4;
    priority_queue<int,vector<int>> maxHeap;

    for(int i =0;i<arr.size(); i++){
        maxHeap.push(arr.at(i));
        if(i >= k-1){
            int max = maxHeap.top();
            maxHeap.pop();
            output.push_back(max);
        };
    }
    return output;
}



