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
    vector<int> res{};
    deque<int> que;
    int l=0;
    for(int i=0;i<arr.size();i++){
        int num = arr[i];
        while(!que.empty() && num > arr[que.back()]){
            que.pop_back();
        }
        que.push_back(i);


        if(que.front() < l){que.pop_front();}

        if(i >= k-1){
            res.push_back(arr[que.front()]);
            l++;
        }

    }
    return res;
}

