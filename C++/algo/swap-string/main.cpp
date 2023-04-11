
#include<iostream>
#include<string>
using namespace std;

string reverseSentence(string sentence);

int main(){
    string text = "hello world";
    
    string res = reverseSentence(text);
    cout<<res<<endl;
    return 0;
}

string reverseSentence(string sentence){
    int j=0;
    int fsize = sentence.size();
    reverse(sentence.begin(),sentence.end());

    for (int i = 0; i < fsize; i++){
        if(sentence[i] == ' '){
            int len = i - j;
            reverse(sentence.begin()+j,sentence.begin()+len);
            j++;
        }
       
    }
    return sentence;
}