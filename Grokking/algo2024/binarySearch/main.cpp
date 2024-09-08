#include<queue>
#include<vector>
#include<utility>
#include<algorithm>
#include<iostream>
#include<optional>
using namespace std;
// g++ -std=c++11 -o out main.cpp

int binarySearch(vector<int> list, int target);
int search(vector<int> &nums, int target);
int main(){

    vector<int> list{3,12,22,56,75,98,102};
    vector<int> list2{3,9,9,9,11,12};

    cout<<"- result:: "<< search(list,98)<<endl;

    return 0;
}


int search(vector<int> &nums, int target){
    int start=0,end=nums.size();
    int mid = (start+end)/2;

    while(start <= end){
        if(target == nums[mid]){
            return mid;
        }else if(target < nums[mid]){
            end = mid-1;
        }else{
            start = mid +1;
        }
        mid = (start +end)/2;
    }
    return -1;
}



int binarySearch2(vector<int> list, int target){
    int start =0,end=list.size()-1;
    int mid = (start + end)/2;

    while( mid < list.size() && mid >= 0 ){
        if(target == list.at(mid)){
            break;
        }else if( target < mid){
            end = mid-1; 
        }else{
            start = mid+1;
        }

        mid = (start + end)/2;
    }


    return mid;

}