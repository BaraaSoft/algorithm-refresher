#include<string>
#include<iostream>
#include<vector>
#include<utility>
#include<map>
#include <queue>

using namespace std;
// g++ -std=c++11 -o out main.cpp

template <class Q>
void clearQueue(Q & q) {
    q = Q();
}

int findMaximizedCapital1(int k, int w, vector<int>& profits, vector<int>& capital);
int main(){
    vector<int> myvect{1,3,4,34};
    vector<int> profits {1,2,3};
    vector<int> capital{0,1,1};

    int val = findMaximizedCapital1(2,0,profits,capital);


    cout<<"output: "<< val;
  

    return 0;
};


int findMaximizedCapital1(int k, int w, vector<int>& profits, vector<int>& capital) {
    sort(capital.begin(),capital.end());
    int value = w;
    priority_queue<pair<int,int>,vector<pair<int,int>>> maxheap;
    map<int,int> usedProject;
    while(k > 0){
        
        for(int i=0;i<capital.size();i++){
            auto it = usedProject.find(i);
            if(capital[i] <= value ){
                if(it == usedProject.end()){
                    maxheap.push({profits[i],i});
                    usedProject.insert({capital[i],capital[i]});
                }
                
            }
        }

        if(!maxheap.empty()){
            auto profitIndexPair = maxheap.top();
            value += profitIndexPair.first;
            usedProject.insert({profitIndexPair.second,profitIndexPair.second});
            clearQueue(maxheap);
        }
        
        k--;
    }

    return value;
}


int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {

    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> minHeap;
    priority_queue<pair<int,int>,vector<pair<int,int>>> maxheap;

    int currProfit=w;

    for(int i =0;i<profits.size();i++){
        minHeap.emplace(make_pair(capital[i],profits[i]));
    }

    
    for(int j=0;j<k;j++){
        while(!minHeap.empty() && minHeap.top().first <= currProfit ){
            pair<int,int> proj = minHeap.top();
            maxheap.emplace(make_pair(proj.second,proj.first));
            minHeap.pop();
        }

        if(!maxheap.empty()){
            pair<int,int> proj = maxheap.top();
            currProfit += proj.first;
            maxheap.pop();
        }
    }
    return currProfit;
}
