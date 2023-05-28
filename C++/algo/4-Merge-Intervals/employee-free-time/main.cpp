// g++ -std=c++11 -o out main.cpp
#include <iostream>
#include <string>
#include <vector>
#include<map>
#include<tuple>
#include<queue>

using namespace std;


struct MinHeap{
    bool operator()(tuple<int,int,int>a,tuple<int,int,int>b){
        return get<0>(a) > get<0>(b);
    }
};

class Interval
{
public:
    int start,end;
    bool closed;
    Interval(int start,int end,bool closed = true):start{start},end{end},closed{closed}{};


    string toString(){
        string closedStr=  "["+ to_string(this->start)  + "," + to_string(this->end) +"]";
        string openStr =  "("+ to_string(this->start)  + "," + to_string(this->end) +")";
        return this->closed ? closedStr:openStr;
    }
};



vector<Interval> employeeFreeTime (vector<vector<Interval>>&schedule);



int main(){


    vector<vector<Interval>> schedule1 =  {{Interval(1, 2), Interval(5, 6)}, {Interval(1, 3)}, {Interval(4, 10)}};
    vector<vector<Interval>> schedule2=  {{Interval(1, 3), Interval(6, 7)}, {Interval(2, 4)}, {Interval(2, 5), Interval(9, 12)}};

    priority_queue<tuple<int,int,int>, vector<tuple<int,int,int>>,MinHeap> que{};

    return 0;
}

vector<Interval> employeeFreeTime (vector<vector<Interval>>&schedule){
    priority_queue<tuple<int,int,int>,vector<tuple<int,int,int>>,MinHeap> heap;
    return {};
}