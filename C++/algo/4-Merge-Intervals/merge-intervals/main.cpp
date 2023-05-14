// g++ -std=c++11 -o out main.cpp

#include<iostream>
#include<string>
#include<vector>

using namespace std;

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


vector<Interval> mergeIntervals(const vector<Interval> &intervals);
void printAll(vector<Interval>&interval);

int main(){

    vector<Interval> res = mergeIntervals({{1,5},{3,7},{4,6}});// [1, 7]
    printAll(res);
    return 0;
}


vector<Interval> mergeIntervals(const vector<Interval> &intervals){

    vector<Interval> res{intervals[0]};


    for(int i=1;i<intervals.size();i++){
        Interval curr = intervals[i];
        Interval top = res.back();
        res.pop_back();
        if(curr.start <= top.end){
            res.push_back({top.start,max(curr.end,top.end)});
        }else{
            res.push_back(top);
            res.push_back({curr.start,curr.end});
        }

    }

    return res;  
}


void printAll(vector<Interval>&interval){

    for(auto &itr : interval){
        cout<<">> "<< itr.toString()<<endl;
    }

}