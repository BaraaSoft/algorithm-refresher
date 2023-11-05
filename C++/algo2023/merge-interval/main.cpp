
#include<string>
#include<iostream>
#include<vector>
#include<utility>
using namespace std;
// g++ -std=c++11 -o out main.cpp

vector<pair<int,int>> merge(vector<pair<int,int>> inputArr);
void printAll(vector<pair<int,int>> &arr);

int main(){

    vector<pair<int,int>> arr{{1,4},{3,6},{7,9}};
    auto res = merge(arr);
    printAll(res);
}

vector<pair<int,int>> merge(vector<pair<int,int>> inputArr){

    vector<pair<int,int>> arr{};

    auto prev= inputArr[0];

    for(int i =1;i<inputArr.size();i++){
        auto curr = inputArr.at(i);
        if(curr.first <= prev.second){
           prev.second = max(prev.second,curr.second);
        }else{
            arr.push_back({prev.first,prev.second});
            prev.first =curr.first;
            prev.second = curr.second;
        }
    }

    arr.push_back({prev.first,prev.second});

 
    return arr;
    
}


void printAll(vector<pair<int,int>> &arr){
    for(auto elm: arr){
        cout<<"["<<elm.first<<","<<elm.second<<"]"<<endl;
    }
}


class Car{
private:
    int year;
    string make;
public:
    Car(int year, string make):year{year},make{make}{};
    ~Car(){};
};
