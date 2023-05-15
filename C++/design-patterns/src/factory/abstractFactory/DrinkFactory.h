#pragma once 
#include<map>
#include<string>
#include "HotDrinks.h"
#include "HotDrinksFactory.h"
using namespace std;

class DrinkFactory
{
private:
    map<string,unique_ptr<HotDrinksFactory>> mfactory{};
public:
    DrinkFactory(){
        mfactory["tea"] = make_unique<TeaFactory>();
        mfactory["coffee"] = make_unique<CoffeeFactory>();
    }

   unique_ptr<HotDrinks> makeDrink(string name){
        auto drink = mfactory[name]->make();
        drink->prepare(300);
        return drink;
    }
   
};
