#include<queue>
#include<vector>
#include<utility>
#include<algorithm>
#include<iostream>
#include<optional>
using namespace std;
// g++ -std=c++11 -o out main.cpp


class MinHeap{
private:
    vector<int> heap{0};

public:
    optional<int> pop(){

        if(heap.size()==1) return nullopt;
        if(heap.size()==2){
            int minNum = heap.back();
            heap.pop_back();

            return minNum;
        }

        int minNum = heap.at(1);
        heap[1]= heap.back();
        heap.pop_back();
        int i =1;

        while (2 * i < heap.size() )
        {

            if((2*i +1 < heap.size()) &&  heap.at(2*i+1) < heap.at(2*i) && heap.at(i) > heap.at(2*i+1)){
                swap(heap.at(2*i+1 ),heap.at(i));
                i= 2*i+1;
            }else if(heap.at(i)> heap.at(2*i)){
                swap(heap.at(2*i),heap.at(i));
                i = 2*i;
            }else{
                break;
            }

        }
        return minNum;
    }

    void push(int num){
        heap.push_back(num);
        int i = heap.size() -1;

        while ( i > 1 && heap.at(i) < heap.at(i/2))
        {
            swap(heap.at(i),heap.at(i/2));
            i = i/2;
        }
    }
};







int main(){


    return 0;
}