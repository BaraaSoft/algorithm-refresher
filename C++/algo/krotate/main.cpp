#include <iostream>
#include <vector>
#include <string>
using namespace std;
// g++ -std=c++11 -o out main.cpp
vector<int> krotate(vector<int> arr,int k);

int main(){

    vector<int> arr{1, 3, 5, 7, 9};

   for (size_t i = 0; i < arr.size(); i++)
    {
        cout<<arr[i]<<",";
    }

    cout<<endl;
    krotate(arr,2);
    

    return 0;
}

vector<int> krotate(vector<int> arr,int k){

     int last = arr.size()-1;
      

    //  for(int j=0; j <= arr.size()/2;j++){
    //    int newIdx =  (j + k) % arr.size();      
    //    swap(arr[j],arr[newIdx]);  
    // }    

    // (1,2,3),(4,5) -> (4,5),(1,2,3)
    reverse(arr.begin(),arr.end());
    reverse(arr.begin(),arr.begin()+k);
    reverse(arr.begin()+k,arr.end());

    for (size_t i = 0; i < arr.size(); i++)
    {
        cout<<arr[i]<<",";
    }

    return arr;
}