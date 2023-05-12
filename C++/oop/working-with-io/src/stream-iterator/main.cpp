#include<iostream>
#include<string>
#include<vector>
#include<algorithm>

using namespace std;

int main(){

    istream_iterator<int> eos;
    istream_iterator<int> inStreamItr(cin);
    vector<int> list{};

   
    
   
    {
        auto pushBackItr = back_inserter(list);
        // for(;inStreamItr != eos;inStreamItr++)
        //     list.push_back(*inStreamItr);
        copy(inStreamItr,eos,pushBackItr);
    }
   
   
    ostream_iterator<int> outStreamItr{cout,","};

    {
        copy(list.rbegin(),list.rend(),outStreamItr);
        // for(auto &itr:list)
        //      *outStreamItr= itr;
    }
  

    cout<<"Running Ok..."<<endl;

    return 0;
}