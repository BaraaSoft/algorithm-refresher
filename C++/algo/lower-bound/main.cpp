#include<iostream>
#include<vector>
#include<string>

using namespace std;

// g++ -std=c++11 -o out main.cpp

int lowerBound(vector<int> arr,int val);
int binaraySearch(vector<int> arr,int val);
std::string primeQuestion(std::string str,vector<int> arrA);
pair<int,int> closestSumBruteForce(vector<int> arr,int val);

int main(){
    vector<int> arr {2,4,7,9};
    cout<<">> Found at :: "<<lowerBound(arr,3)<<endl;

    // the use of pair
    pair<int,int>p(10,2);
    int x,y;
    tie(x, y) = p;


    closestSumBruteForce(vector<int>{10, 22, 28, 29, 30, 40},54);


    cout<<">> prime Question (1): "<<primeQuestion("cdeo",vector<int>{3,2,0,1})<<endl;
    cout<<">> prime Question (2): "<<primeQuestion("cdeenetpi",vector<int>{5,2,0,1,6,4,8,3,7})<<endl;
    return 0;
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


/*** robose - using binary search to find lower bound ***/
int lowerBound(vector<int> arr, int val){
    int start = 0;
    int end = arr.size();
    int ans = -1;
    while(start< end ){
        int mid = (end + start)/2;
        if(arr.at(mid)<=val){
             ans = mid;
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return start;
}

int binararySearch(vector<int>arr, int val){
    int start = 0;
    int end = arr.size();
    
    while (start < end)
    {
        int mid = (end - start)/2;
        if(arr.at(mid) == val){
            return mid;
        }else if(arr.at(mid)< val){
            end = mid -1;
        }else{
            start = mid;
        }

    }
    
    return -1;
}


std::string primeQuestion(std::string str,vector<int> arrA){
    // str = cdeo, arrA = {3,2,0,1}; //res = code 
    int startIndex = std::find(arrA.begin(),arrA.end(),0) -  arrA.begin();

    std::string result = "";
    result += str.at(0);
    startIndex = arrA[startIndex];
    while(arrA[startIndex] != 0){
        int pos = arrA[startIndex];
        result += str.at(pos);
        startIndex = pos;
    }
    return result;
}