#include<iostream>
#include<vector>
#include<string>

using namespace std;

// g++ -std=c++11 -o out main.cpp

int lowerBound(vector<int> arr,int val);
int binaraySearch(vector<int> arr,int val);
std::string primeQuestion(std::string str,vector<int> arrA);
int main(){
    vector<int> arr {2,3,5,6};
    //cout<<">> Found at :: "<<lowerBound(arr,3)<<endl;

 

    cout<<">> prime Question (1): "<<primeQuestion("cdeo",vector<int>{3,2,0,1})<<endl;
    cout<<">> prime Question (2): "<<primeQuestion("cdeenetpi",vector<int>{5,2,0,1,6,4,8,3,7})<<endl;
    return 0;
}

int lowerBound(vector<int> arr, int val){

    int start = 0;
    int end = arr.size();

    while(start< end){
        int mid = (end - start)/2;
        if(val > arr.at(mid)){
            start = mid;
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