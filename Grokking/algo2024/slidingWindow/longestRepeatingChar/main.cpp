#include<iostream>
#include<vector>
#include<string>
#include<set>

using namespace std;
// g++ -std=c++11 -o out main.cpp

int longestRepeatingCharacterReplacement(const std::string& str, int k);

int main(){

    const int res = longestRepeatingCharacterReplacement("BAAAB",2);// expected=5

    cout<<">> "<<res<<endl;

    return 0;
}


int longestRepeatingCharacterReplacement(const std::string& str, int k){


    set<char> letters{};
    for(auto it= str.begin();it!= str.end();it++) letters.insert(*it);

    int maxLen =0;
    for(auto it = letters.begin();it!= letters.end();it++){
        char lt = *it;
        int j=0,i=0,count=0;
        while(i<str.size()){
            if(i>=0 && lt == str[i] )count++;

            while( i - j +1 - count > k){
                if(lt == str[j++]) count--;
            }
            int len = i-j+1;
            maxLen = max(maxLen,len);
            i++;
        }
    }
    return maxLen;
}



int DebugLongestRepeatingCharacterReplacement(const std::string& str, int k){


    set<char> letters{};
    for(auto it= str.begin();it!= str.end();it++){
        letters.insert(*it);
    }


    string maxStr ="";
     
    for(auto it = letters.begin();it!= letters.end();it++){
        char lt = *it;
        int j=0;
        int i = 0;
        int count =0;
        while(i<str.size()){
            if(i>=0 && lt == str[i] ) count++;
            
            while( i - j +1 - count > k){
                if(lt == str[j++]) count--;
            }
            string currStr = str.substr(j,i-j+1);
            if( currStr.size()> maxStr.size() ) maxStr = currStr;
            i++;
        }
        
    }
    

    return maxStr.size();
}
