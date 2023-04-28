
#include<string>
#include<iostream>
#include<vector>

using namespace std;
// g++ -std=c++11 -o out main.cpps

void reverseIt(string &text);

int main(){

    cout<<"working ...."<<endl;

    string text= "Baraa Mirghani Mohamed";

    reverseIt(text);

   
    cout<<text<<endl;


}

void reverseIt(string &text){

     std::reverse(text.begin(),text.end());
     int j=0;
     for(int i =0; i < text.size();i++){
        if(text[i]==' '){
            std::reverse(text.begin()+j,text.begin()+i);
            j=i+1;
        }else if(i == text.size() -1 ){
            std::reverse(text.begin()+j,text.begin()+i+1);
        }
     }
     
}