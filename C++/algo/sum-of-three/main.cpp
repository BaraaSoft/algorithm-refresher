// g++ -o out main.cpp

#include <iostream>
#include <string>
using namespace std;

// Valid Palindrome

int main(){
    string str = "The is very long string";

    cout<<"size of string"<<str.length()<<endl;
    return 0;
}


bool FindSumOfThree(vector<int> nums, int target)
{
   std::sort(nums.begin(),nums.end());
    for(int i = 0;i<nums.size();i++){
      int num =   target - nums[i];
      int j= i+1;
      int k = nums.size()-1;
      while(j<k){
         if(num ==( nums[j] + nums[k])){
            return true;
         }else if(num < nums[j] + nums[k] ){
            k--;
         }else{
            j++;
         }
      }
   }
   return false;
}