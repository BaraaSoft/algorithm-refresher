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


vector<Interval> insertInterval(const vector<Interval> &existingIntervals, const Interval &newInterval);
void printAll(vector<Interval>&interval);

int main(){

    vector<Interval> res = insertInterval({{1,2},{3,4},{5,8},{9,15}},{2,5});// {[1,8],[9,15]}
    printAll(res);
    return 0;
}


vector<Interval> insertInterval(const vector<Interval> &existingIntervals, const Interval &newInterval){

    vector<Interval> res{newInterval};

    for(auto &curr:existingIntervals){
        Interval base = res.back();
        res.pop_back();

        if(curr.end >= base.start && curr.end <= base.end){
            res.push_back({min(curr.start,base.start),max(curr.end,base.end)});
        }else if(curr.start >= base.start && curr.start <= base.end ){
             res.push_back({min(curr.start,base.start),max(curr.end,base.end)});
        }else if (curr.end < base.start){
            res.push_back(curr);
            res.push_back(base);
        }else{
             res.push_back(base);
             res.push_back(curr);
        }
    }

    return res;  
}


void printAll(vector<Interval>&interval){

    for(auto &itr : interval){
        cout<<" "<< itr.toString();
    }

    cout<<endl;

}