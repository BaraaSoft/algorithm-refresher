#include<queue>
#include<vector>
#include<utility>
#include<algorithm>
#include<iostream>
using namespace std;
// g++ -std=c++11 -o out main.cpp

int tasksFun(vector<vector<int>> tasksList);

int main(){

    vector<vector<int>> taskslist = {{1,1},{5,5},{8,8},{4,4},{6,6},{10,10},{7,7}};
    vector<vector<int>> taskslist2{ {1, 7}, {8, 9}, {3, 6}, {9, 14}, {6, 7}};

    int result = tasksFun(taskslist);
    int result2 = tasksFun(taskslist2);


    cout<<">> 1. machines: "<< result <<endl;
    cout<<">> 2. machines: "<< result2 <<endl;


    return 0;
}


struct pairGreaterSecond{
    constexpr bool operator()(pair<int,int> const &a, pair<int,int> const &b)const noexcept{ return a.second > b.second;};
};


// [(1, 7)x, (8, 9)x, (3, 6)x, (9, 14), (6, 7)x]
// {{1,7}, {3,6}, {6,7}, {8,9}, {9,14}}
// 

int tasksFun(vector<vector<int>> tasksList)
{

    priority_queue<pair<int,int>, vector<pair<int,int>>,greater<pair<int,int>>> minHeap;
    priority_queue<int,vector<int>,greater<int>> availableMachines{};

    for(auto item:tasksList){
        minHeap.push(make_pair(item[0],item[1]));
    }
     
    int endTime = minHeap.top().second;
    availableMachines.push(endTime);
    minHeap.pop();

    while(!minHeap.empty()){
        pair<int,int> nextTask = minHeap.top();
        int activeTask = availableMachines.top(); 

        if(nextTask.first < activeTask){
            availableMachines.push(nextTask.second);
        }else{
            availableMachines.pop();
            availableMachines.push(nextTask.second);
        }
        minHeap.pop();
    }
    return availableMachines.size();
}