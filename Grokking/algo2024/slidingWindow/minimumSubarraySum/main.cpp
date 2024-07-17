#include<iostream>
#include<map>
#include <climits>


using namespace std;
// g++ -std=c++11 -o out main.cpp

int minSubArrayLen(int target, vector<int>& nums);

int main(){

    vector<int> arr{1, 2, 7, 1, 8};
    int res = minSubArrayLen(9,arr);

    cout<<">> res: "<<res<<endl;
    return 0;
}




int minSubArrayLen(int target, vector<int>& nums){

    int l =0;
    int minLen = INT_MAX,currSum= 0;

    for(int r=0;r<nums.size();r++){
        currSum += nums[r];

        while (currSum >= target && l<=r)
        {
            int lnum = nums[l];
            int currLen = r-l+1;
            if(currLen < minLen){
                minLen = currLen;
            }

            currSum -= lnum;
            l++;
        }
        
    }
    
    return minLen == INT_MAX ? 0 : minLen;
}