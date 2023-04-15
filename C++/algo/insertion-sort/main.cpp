#include<iostream>
#include<vector>
#include<string>
// g++ -std=c++11 -o out main.cpp
using namespace std;
void print(vector<int> arr);
void insertionSort(vector<int> arr);
void InsertionSort(int A[], int n);

int main(){


    insertionSort(vector<int>{8,5,3,2});

    return 0;
}


void print(vector<int> arr ){
    cout<<endl;
    for(int i = 0;i < arr.size(); i++){
        cout<<arr[i]<<","<<flush;
    }
}


void insertionSort(vector<int>arr){

    
    for(int i = 1;i<arr.size();i++){
        int j = i-1;
        int temp = arr[i];

        while(j > -1 && arr[j]> temp){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = temp;

    }


    print(arr);

}



 
void InsertionSort(int A[], int n){
    for (int i=1; i<n; i++){
        int j = i-1;
        int x = A[i];
        while (j>-1 && A[j] > x){
            A[j+1] = A[j];
            j--;
        }
        A[j+1] = x;
    }
}