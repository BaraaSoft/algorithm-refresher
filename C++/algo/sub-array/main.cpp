#include<iostream>
#include<string>
using namespace std;
// g++ -std=c++11 -o out main.cpp
int sumOfTheLargestSubArray(int arr[],int len);
void printAllSubArray(int *arr,int len);



int main(){
    int arr[3]{1,2,3};

    int len = sizeof(arr)/sizeof(int);
    printAllSubArray(arr,len);
    int max = sumOfTheLargestSubArray(arr,len);
    cout<<">> max sub array: "<<max<<endl;
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




int sumOfTheLargestSubArray(int arr[],int len){
    int maxSum = 0;
    int sumArr[len];
    
    sumArr[0] = arr[0];
    for(int i = 1;i<len;i++){
        sumArr[i] = sumArr[i-1]+ arr[i];
    }


    for(int i=0;i<len;i++){
       
        for(int j=i;j<len;j++){
           int sum = i > 0? sumArr[j] - sumArr[i-1]:sumArr[j];
           maxSum = max(sum,maxSum);
        }
    }

return maxSum;

}