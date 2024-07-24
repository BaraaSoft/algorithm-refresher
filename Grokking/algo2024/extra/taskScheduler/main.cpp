#include<queue>
#include<vector>
#include<utility>
#include<algorithm>
#include<iostream>
#include<map>
#include<optional>
#include<string>

using namespace std;
// https://leetcode.com/problems/task-scheduler/description/
// g++ -std=c++17 -o out main.cpp


int leastInterval(vector<char>& tasks, int n);

int main(){

    vector<char> tasks{'A','A','A','B', 'B','B'};
    int res =leastInterval(tasks,2);

    cout<<">> time:"<<res<<endl;
    return 0;
}

struct pairSecondLess{
   constexpr bool operator()(pair<char,int> const &a,pair<char,int> const &b) const noexcept { return a.second < b.second; }
};

int leastInterval(vector<char>& tasks, int n){
    priority_queue<int,vector<int>,less<int>> maxHeap{};
    map<char,int> charFreqMap{};
    queue<pair<char,int>> coolOffQueue{};


    for(auto task:tasks){
        charFreqMap[task]++;
    }

    for(auto it = charFreqMap.begin(); it!= charFreqMap.end();it++){
        maxHeap.push(it->second);
    }

    int time=0;

    pair<int,int> emptyPair = pair<char,int>();

    while( !maxHeap.empty() || !coolOffQueue.empty()){
         
        int currTask{};
        pair<int,int> task2{};
       
        time++;

       if(!maxHeap.empty()) currTask = maxHeap.top();
        if(currTask > 0){
             currTask--;
            if(currTask >0)  coolOffQueue.push({currTask,time+n});
             maxHeap.pop();
        }

        if(!coolOffQueue.empty())task2 = coolOffQueue.front();
        if(task2 != emptyPair && task2.second ==time){
            coolOffQueue.pop();
            maxHeap.push(task2.first);
        }
    }

    return time;
}