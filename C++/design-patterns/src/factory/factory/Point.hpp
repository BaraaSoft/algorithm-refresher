#ifndef Point_H_ 
#define Point_H_ Point_H_
#include<cmath>
class Point
{
private:
    float x,y;
    Point(float a,float b):x{a},y{b}{};
public:
    static Point NewCartesianPoint(float x, float y){
        return {x,y};
    }
    static Point NewPolarPoint(float a, float theta){
        return {a * sin(theta) , a * cos(theta)};
    }
};

#endif