#include<iostream>
#include<utility>
#include<map>
#include<queue>

using namespace std;
// g++ -std=c++11 -o out main.cpp

int main(){

    std::cout<<">> Median stream:"<<endl;

    return 0;
}


class MedianFinder{
private:
    priority_queue<int,vector<int>> maxHeap;
    priority_queue<int,vector<int>,greater<int>> minHeap;
public:
    MedianFinder(){}
    void addNum(int num){
        maxHeap.push(num);
        int maxNum = maxHeap.top();
        maxHeap.pop();
        minHeap.push(maxNum);

        if(minHeap.size()> maxHeap.size()){
            int minNum = minHeap.top();
            maxHeap.push(minNum);
            minHeap.pop();
        }
    }
    double findMedian(){
        return minHeap.size() < maxHeap.size()? maxHeap.top():(maxHeap.top()+minHeap.top())*0.5;
    }
};