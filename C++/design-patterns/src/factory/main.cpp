#include<string>
#include<iostream>

#include "factory/Point.hpp"
#include<cmath>

using namespace std;

int main(){

    

    Point pointA = PointFactory::NewCartesianPoint(3,9);
    Point pointB = PointFactory::NewPolarPoint(10,45);
    
    cout<<"Angle: "<<cos(30)<<endl;
    cout<<"IT works .."<<endl;
    return 0;
}