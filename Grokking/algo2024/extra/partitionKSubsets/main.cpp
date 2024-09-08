#include<queue>
#include<vector>
#include<utility>
#include<algorithm>
#include<iostream>
#include<optional>
using namespace std;
// g++ -std=c++11 -o out main.cpp

bool canPartitionKSubsets(vector<int>& nums, int k);

int main(){

    vector<int> list{4,3,2,3,5,2,1};
    //       (x,x) = 5
    canPartitionKSubsets(list,4);

    return 0;
}

// 
bool canPartitionKSubsets(vector<int>& nums, int k){

    double sum = 0;
    for(auto it = nums.begin(); it != nums.end(); it++){
        sum += *it;
    }

    double targetSum = sum/k;

    cout<<">> targetSum: "<< targetSum<<endl;



    return false;
}