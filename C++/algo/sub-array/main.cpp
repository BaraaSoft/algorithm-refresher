#include<iostream>
#include<string>
using namespace std;
// g++ -std=c++11 -o out main.cpp

void printAllSubArray(int *arr,int len);
int main(){
    int arr[]{1,2,3};

    int len = sizeof(arr)/sizeof(int);
    printAllSubArray(arr,len);
    return 0;
}


void printAllSubArray(int* arr,int len){
 for (size_t i = 0; i < len; i++)
    {
        for (size_t j  = 0; j < len; j++)
        {
            for (size_t k = i; k <= j; k++)
            {
                cout<<arr[k];
            }
            cout<<endl;
            
        }
        cout<<endl;
    }

}