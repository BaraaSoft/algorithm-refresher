#include<iostream>
#include "TNode.h"
using namespace std;
// g++ -std=c++11 -o out main.cpp TNode.cpp

int main(){
    TNode *node1 = new TNode();
    node1->setValue(10);
    TNode *node2 = new TNode();
    node2->setValue(200);
    TNode *node3 = new TNode();
    node3->setValue(300);

    node1->setNext(node2);
    node2->setNext(node3);


    node1->printAll(node1);

    return 0;
}