#ifndef HOTDRINKS_H_
#define HOTDRINKS_H_ HOTDRINKS_H_ 

#include <iostream>

using namespace std;

class HotDrinks
{
public:
    HotDrinks(){};
    virtual ~HotDrinks() = default;
    virtual void prepare(int volume) = 0;
};

class Tea : HotDrinks
{
public:
    Tea(/* args */){}
    ~Tea() override{}
    void prepare( int volume) override {
        cout<<">> Take tea pag, boil water, pour "<<volume<<" ml"<<endl;
    }
};

class Coffee : HotDrinks
{
public:
    Coffee(/* args */){}
    ~Coffee() override{}
    void prepare(int volume) override{
        cout<<">> Grind coffee beans, boil water, pour "<<volume<<" ml"<<endl;
    }
};


#endif