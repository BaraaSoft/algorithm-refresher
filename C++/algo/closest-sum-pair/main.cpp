#include <iostream>
#include <vector>
#include <string>
using namespace std;
// g++ -std=c++11 -o out main.cpp

pair<int,int> closestSum(vector<int> arr,int val);
pair<int,int> closestSumBruteForce(vector<int> arr,int val);

int main(){
    closestSum(vector<int>{10, 22, 28, 29, 30, 40},54);
    return 0;
}




/*

**************** Two-pointer Approach ****************
    We can easily solve the problem by maintaining two pointers, i and j, 
    and keeping the search space first[i…] and second[…j]. The first pointer, i, 
    initially points at the beginning of the first array, first, 
    and the second pointer j initially points at the end of the second array, second.

    At each iteration of the loop, process 
    the elements present at index i and j and update 
    the closest pair to the current pair (i, j) 
    if the absolute value of (first[i] + second[j] - target) is minimum among all pairs processed.

     -If the sum of the current pair (i, j) is less than target, 
            increment i as an element at index i+1 has more value than the element at index i.
     -If the sum of the current pair (i, j) is more than target, 
            decrement j as an element at index j-1 has less value than the element at index j.

*/

pair<int,int> closestSum(vector<int> arr,int val){

    int i=0,j=arr.size() -1;
    

    pair<int,int>bestPair(0,0);
    int bestSum = INFINITY;

    while (i < j){
       int leftVal = arr[i];
       int rightVal = arr[j];
       int diff = abs(leftVal + rightVal - val);

       if(diff <= bestSum){
        bestPair = make_pair(arr[i],arr[j]);
        bestSum = diff;
        i++;
       }else {
        j--;
       }
        
    }
    cout<<">> best pair "<<bestPair.first<<","<<bestPair.second<<endl;
     return bestPair;
}

pair<int,int> closestSumBruteForce(vector<int> arr,int val){
    pair<int,int> bestPair(0,0);
    int bestSum = INFINITY;
    for(int i=0;i<arr.size()-1;i++){
        for(int j=i+1;j<arr.size();j++){
            int sum = abs( arr.at(i) + arr.at(j) - val);
            if(sum < bestSum ){
                bestSum = sum;
                bestPair = make_pair(arr[i],arr[j]);
            }
        }
    }


    cout<<">> best pair "<<bestPair.first<<","<<bestPair.second<<endl;

    return bestPair;
}