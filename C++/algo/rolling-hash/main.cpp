// g++ -std=c++11 -o out main.cpp
#include<iostream>
#include<string>
#include<vector>

using namespace std;
int hashIt(string text);

int main(){
    string text = "BAA";
    cout<<">> "<<text<<": "<<hashIt(text)<<endl;
    return 0;
}


int hashIt(string text){

    double NUM_OF_CHAR = 26;
    int PRIME_NUM = 5381;
    reverse(text.begin(),text.end());
    float hash =0;
    for(int i=0;i<text.length();i++){
        double posNum = text[i] - 'A' + 1;
        int posHash = posNum * pow(NUM_OF_CHAR,i);
        hash = fmod(hash + posHash,PRIME_NUM);
    }

    return hash;
}