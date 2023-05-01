// g++ -std=c++11 -o out main.cpp
// https://www.youtube.com/watch?v=TCHSXAu5pls
#include <iostream>
#include <string>
#include <vector>

using namespace std;

vector<int> maximumSlidingWindow(vector<int> arr,int k);
void printAll(vector<int> arr);
void slideWindow(vector<int> &arr, vector<int> &window,int i);


int main(){
    vector<int> list{1,2,3,4,5,6,7,8,9,10};
    vector<int> list2{6,1,5,3,9};
    
   
    vector<int> resArr = maximumSlidingWindow(list,4);
    vector<int> resArr2 = maximumSlidingWindow(list2,3);
    printAll(resArr);
    printAll(resArr2);
    return 0;
}

void slideWindow(vector<int> &arr,vector<int> &window,int i){

    while(!window.empty() && arr[window.back()]<= arr[i] ){
        window.pop_back();
    }

}

vector<int> maximumSlidingWindow(vector<int> arr, int k){
    vector<int> maxArr{};
    vector<int> window{};

    for(int i=0; i< k;i++){
        slideWindow(arr,window,i);
        window.push_back(i);
    }
    maxArr.push_back(arr[window.front()]);
    for(int i=k;i<arr.size();i++){
        slideWindow(arr,window,i);
        if(!window.empty() && window.front() <= i-k){
            window.erase(window.begin());
        }
         window.push_back(i);
         maxArr.push_back(arr[window.front()]);
    }
   
    return maxArr;
}

void printAll(vector<int> arr){
    for(auto  &elm :arr){
        cout<<elm<<endl;
    }
    cout<<"----"<<endl;
}