
#include "TNode.h"

void TNode::setValue(int val){
    this->value = val;
};


void TNode::setNext(TNode *node){
    this->next = node;
 }

TNode* TNode::getNext(){
    return this->next;
}

void TNode::printAll(TNode *root){
    while (root != nullptr)
    {
       std::cout<<"> "<<root->value<<std::endl;
       root = root->next;
    }
    
}