#include <iostream>
#include <vector>
#include <string>
#include <deque>
#include <utility>

using namespace std;
// g++ -std=c++14 -o out main.cpp

int largestRectangleArea(vector<int>& heights);

int main(){
    vector<int> heights{2,1,5,6,2,3};
    cout<< largestRectangleArea(heights) <<endl;
    return 0;
}


int largestRectangleArea(vector<int>& heights) {
    deque<pair<int,int>> stack{};
    int maxArea = 0;
    for(int i=0;i<heights.size();i++){
        int start = i;
        while(!stack.empty() && stack.back().second > heights[i]){
           
            auto column = stack.back();
            maxArea = max(maxArea,column.second *(i-column.first) );
            stack.pop_back();
            start = column.first;
        }

        stack.push_back(make_pair(start,heights[i]));
    };

    for(const auto &area: stack){
        maxArea = max((unsigned long)maxArea,area.second * (heights.size()-area.first));
    }
    
    return maxArea;
}