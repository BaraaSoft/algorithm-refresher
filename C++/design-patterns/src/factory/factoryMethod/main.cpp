#include<string>
#include<iostream>
#include<cmath>

using namespace std;

enum class PointType{
    Cartesian,
    Polar
};

struct Point
{
   float x,y;
   Point(float a, float b, PointType ptype = PointType::Cartesian):x{a},y{b}{
    if(ptype != PointType::Cartesian){
        x= a * cos(b);
        y= a * sin(b);
    }
   }
};


int main(){

    cout<<"IT works .."<<endl;
    return 0;
}