// LinkedList.cpp : Defines the entry point for the application.
//

#include "LinkedList.h"
//#include "Node/Node.cpp"
#include "Node/LinkedLs.cpp";

using namespace std;

int main()
{
	Node *node = new Node;

	node->data = "Baraa";

	Node *secNode = new  Node;
	secNode->data = "Mirghani";

	Node* rdNode = new  Node;
	rdNode->data = "Mohamed";



	LinkedLs *Link = new LinkedLs;
	cout << " >> " << node->next << endl;
	Link->root = node;
	Link->add(secNode);
	Link->add(rdNode);

	Link->traverse(Link->root);
	return 0;
}
