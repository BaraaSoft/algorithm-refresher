#include<iostream>
#include<queue>
#include<vector>


using namespace std;

// g++ -std=c++11 -o out main.cpp


int main(){

    return 0;
}

class MedianStream{
private:
    priority_queue<int,vector<int>,std::greater<int>> minHeap{};
    priority_queue<int,vector<int>> maxHeap{};
public:
    MedianStream(){

    }

    void insertNum(int num){

        if(maxHeap.empty() || num <= maxHeap.top()){
            maxHeap.push(num);
        }else{
            minHeap.push(num);
        }

        if( maxHeap.size() +1 > minHeap.size()){
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        }

        if(minHeap.size()> maxHeap.size()){
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
       
    }

    double findMedian(){
        if(maxHeap.size() == minHeap.size()) return (maxHeap.top() + minHeap.top())*0.5;

        return maxHeap.top();
    }
};

