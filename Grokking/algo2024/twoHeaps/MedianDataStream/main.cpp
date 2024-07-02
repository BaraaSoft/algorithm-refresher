#include<algorithm>
#include<iostream>
#include<utility>
#include<map>
#include<vector>
#include<queue>

using namespace std;
// g++ -std=c++11 -o out main.cpp

int main(){
    cout<<"Begin"<<endl;
}


class MedianFinder{
    private:
        priority_queue<double,vector<double>> maxHeap;
        priority_queue<double,vector<double>,greater<double>> minHeap;
    public:
        MedianFinder(){}
        void addNum(int num) {
        this->maxHeap.push(num);
        this->minHeap.push(num);
    }
    
    double findMedian() {
        double minNum = this->minHeap.top();
        double maxNum = this->maxHeap.top();
        if(!this->minHeap.empty()){
            this->minHeap.pop();
        }
        if(!this->maxHeap.empty()){
            this->maxHeap.pop();
        }
        
        return (minNum+maxNum)/2;
    }
};