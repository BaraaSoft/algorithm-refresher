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
vector<Interval> IntervalsIntersection(vector<Interval> intervalListA, std::vector<Interval> intervalListB);
void printAll(vector<Interval>&interval);

bool compare (Interval a,Interval b){
    return a.start < b.start;
}

int main(){

    auto result = IntervalsIntersection({{2, 6}, {7, 9}, {10, 13}, {14, 19}, {20, 24}},{{1, 4}, {6, 8}, {15, 18}});
    printAll(result);
    

    return 0;
}





vector<Interval> IntervalsIntersection(vector<Interval> intervalListA, std::vector<Interval> intervalListB)
{
    // your code will replace this placeholder return statement
    vector<Interval> result;
    int l=0,r=0;

    sort(intervalListA.begin(),intervalListA.end(),compare);
    sort(intervalListB.begin(),intervalListB.end(),compare);


    while(l < intervalListA.size() && r <intervalListB.size()){
        Interval a = intervalListA[l];
        Interval b = intervalListB[r];
        int start = max(a.start,b.start);
        int end = min(a.end,b.end);

       if(start <=  end){
        result.push_back({start,end});
       }

       if(a.end < b.end){
        l++;
       }else{
        r++;
       }
    }
    
    return result; 
}

void printAll(vector<Interval>&interval){

    for(auto &itr : interval){
        cout<<">> "<< itr.toString()<<endl;
    }

}