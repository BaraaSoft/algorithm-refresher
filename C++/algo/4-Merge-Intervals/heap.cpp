// g++ -std=c++11 -o out main.cpp
#include <iostream>
#include <string>
#include <vector>
#include<map>
#include<tuple>
#include<queue>

using namespace std;

struct MinHeap{
    bool operator()(tuple<int,int,int> &a,tuple<int,int,int> &b){
          return get<0>(a) > get<0>(b);
    }
};

struct MaxHeap{
    bool operator()(tuple<int,int,int>a,tuple<int,int,int>b){
        return get<0>(a) < get<0>(b);
    }
};

void printTop(priority_queue<tuple<int,int,int>, vector<tuple<int,int,int>>,MinHeap> &que);


int main(){
    priority_queue<tuple<int,int,int>, vector<tuple<int,int,int>>,MinHeap> que{};

    que.push({5,2,2});
    que.push({10,0,0});
    que.push({3,1,1});

    printTop(que);

    return 0;
}


void printTop(priority_queue<tuple<int,int,int>, vector<tuple<int,int,int>>,MinHeap>&que){
    auto elm = que.top();
        cout<<get<0>(elm)
        <<","<<get<1>(elm)
        <<","<<get<2>(elm)
        <<endl;
    
}


