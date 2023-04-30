// g++ -std=c++11 -o out main.cpp

#include <iostream>
#include <string>
#include <vector>

using namespace std;

vector<int> maximumSlidingWindow(vector<int> arr,int k);
void printAll(vector<int> arr);
// https://www.youtube.com/watch?v=TCHSXAu5pls
int main(){
    vector<int> list{1,2,3,4,5,6,7,8,9,10};
    
   
    vector<int> resArr = maximumSlidingWindow(list,4);
    printAll(resArr);
    return 0;
}


vector<int> maximumSlidingWindow(vector<int> arr, int k){
    vector<int> maxArr{};
   
    return maxArr;
}

void printAll(vector<int> arr){
    for(auto  &elm :arr){
        cout<<elm<<endl;
    }
}