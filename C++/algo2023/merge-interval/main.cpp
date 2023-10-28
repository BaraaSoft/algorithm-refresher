
#include<string>
#include<iostream>
#include<vector>

using namespace std;
// g++ -std=c++11 -o out main.cpps



int main(){

    cout<<"working ...."<<endl;

    string text= "Baraa Mirghani Mohamed";

   vector<string> arr = {"Baraa","Mirghani"};

   for(int i=0;i<arr.size(); i++){
       cout<<arr.at(i)<<endl;
   }

   
    cout<<text<<endl;
}


class Car{
private:
    int year;
    string make;
public:
    Car(int year, string make):year{year},make{make}{};
    ~Car(){};
};
