#ifndef HOTDRINKSFACTORY_H
#define HOTDRINKSFACTORY_H HOTDRINKSFACTORY_H

#include "HotDrinks.h"
#include<memory>

using namespace std;

class HotDrinksFactory{
public:
    virtual unique_ptr<HotDrinks> make() const = 0;    
    virtual ~HotDrinksFactory() = default;
};

class TeaFactory : HotDrinksFactory{
public:
    unique_ptr<HotDrinks> make() const override {
        return make_unique<Tea>();
    }  
};

class CoffeeFactory: HotDrinksFactory{
public:
    unique_ptr<HotDrinks> make() const override{
        return make_unique<Coffee>();
    }
};








#endif
