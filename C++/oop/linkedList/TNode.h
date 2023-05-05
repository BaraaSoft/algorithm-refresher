#ifndef TNODE_H_
#define TNODE_H_


#include<iostream>

class TNode
{
private:
    int value{0};
    TNode *next{nullptr};
public:
   
    void setValue(int val);
    void setNext(TNode *node);
    TNode* getNext();
    void printAll(TNode *root);
};

#endif