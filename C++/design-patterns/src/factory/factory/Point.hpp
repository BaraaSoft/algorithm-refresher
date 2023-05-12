#ifndef POINT_H_ 
#define POINT_H_ POINT_H_
#include<cmath>
class Point
{
private:
    float x,y;
public:
    Point(float a, float b):x{a},y{b}{};
};

struct PointFactory
{
    static Point NewCartesianPoint(float x, float y){
        return {x,y};
    }
    static Point NewPolarPoint(float a, float theta){
        return {a * sin(theta),a * cos(theta)};
    }
};


#endif