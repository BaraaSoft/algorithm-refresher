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
    TNode():TNode{0}{};
    TNode(int val):value{val},next{nullptr}{};
    TNode(int val,TNode nextval):value{val}{
        next = new TNode;
        *next = nextval;
    };

    TNode(const TNode &tnode):TNode{tnode.value,*tnode.next}{}
    ~TNode(){delete next;};
};

#endif