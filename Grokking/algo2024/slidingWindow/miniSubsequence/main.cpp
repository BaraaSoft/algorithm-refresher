#include<iostream>
#include<string>
#include<vector>
#include<map>
#include<queue>

using namespace std;

// g++ -std=c++11 -o out main.cpp

string miniWindow(string str1,string str2);
int main(){

    // string miniStr = miniWindow("abbcb","ac");
      string miniStr = miniWindow("abbcb","aaa");

    cout<<">> "<<miniStr<<endl;

}


string miniWindow(string str1,string str2){
       queue<int> startingIndexs{};
    deque<string> resQue{str1};

    for(int i=0;i<str1.size();i++){
        if(str1.at(i) == str2.at(0)) startingIndexs.emplace(i);
    }

    while (!startingIndexs.empty())
    {
        int s1 =startingIndexs.front();
        int start = s1;
        startingIndexs.pop();
        int s2 = 0;

        while(s1 < str1.size()){
            if( str1[s1] == str2[s2] ){
                s2++;
            }

            if(s2 == str2.size()){
                string res = str1.substr(start, s1-start+1);
                string miniStr = resQue.back(); 
                if(res.size()< miniStr.size()){
                    resQue.push_back(res);
                }
                if(res.size()== miniStr.size()){
                    resQue.push_front(res);
                }
                break;
            }
            s1++;
        }
    }
    

    return resQue.size()<2? "": resQue.back();
}