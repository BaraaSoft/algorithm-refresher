// g++ -std=c++11 -o out main.cpp

#include <iostream>
#include <string>
#include <vector>

using namespace std;


int hashIt(string text);
int subtractMspHash(string text,int hash);

int main(){

    string text = "MIT";
    int hash = hashIt(text);
    int subHash = subtractMspHash(text,hash);

    cout<<"HASH :"<<hash<<endl;
    cout<<"SUB HASH :"<<subHash<<endl;
    cout<<"HASH (IT) :"<< hashIt("IT") <<endl;
    cout<<"HASH (M) :"<< hashIt("M") * 16<<endl;


    return 0;
}


int subtractMspHash(string text,int hash){
    int PRIME_NUM = 5381;
    int UNIQUE_CHAR = 4; // The number of all possible unique symbol in you text;

    int windowLen = text.length()-1;

    int charNum = text[0] - 'A' +1 ;
    int charHash = fmod( charNum * pow(UNIQUE_CHAR,windowLen),PRIME_NUM);
    int newHash = (hash - charHash ) * UNIQUE_CHAR;
    return newHash;
}


int hashIt(string text){

    reverse(text.begin(),text.end());

    int PRIME_NUM = 5381;
    int UNIQUE_CHAR = 4;

    int hash = 0;

    for(int i=0;i<text.length();i++){
        int charNum = text[i] - 'A' +1;
        int charHash= charNum * pow(UNIQUE_CHAR,i);
        hash = fmod(hash+charHash,PRIME_NUM);    
    }

    return hash;
}