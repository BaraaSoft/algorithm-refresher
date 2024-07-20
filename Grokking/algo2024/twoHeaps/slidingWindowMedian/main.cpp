#include<iostream>
#include<queue>
#include<vector>
#include<map>

using namespace std;
// g++ -std=c++11 -o out main.cpp


vector<double> medianSlidingWindow(vector<int> nums, int k);

int main(){

    vector<int> list{1,3,-1,2,-2,-3,5,1,5,3};

    auto results = medianSlidingWindow(list,4);

    for(auto it: results){
        cout<<it<<","<<endl;
    }

    return 0;
}


vector<double> medianSlidingWindow(vector<int> nums, int k)
{

    vector<double> results{};
    for(int i=0;i+k<=nums.size();i++){
        vector<double> window(nums.begin()+i,nums.begin()+i+k);
        sort(window.begin(),window.end());
        if(k & 1){
            results.push_back(window[k/2]);
        }else{
            double median = (window[k/2-1]+window[k/2])*0.5;
            results.push_back(median);
        }
    }
    return results;

}
