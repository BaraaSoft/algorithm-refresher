#include <iostream>
#include <string>

#include "Node.cpp"

struct LinkedLs {
	Node* root{ nullptr };

	void add(Node *node) {
		
		_add(root, node);
	};

	void _add(Node *rtnode,Node *node) {
		if (rtnode->next == nullptr) {
			rtnode->next = node;
			return;
		}

		_add(rtnode->next, node);

	}


	void traverse(Node* startNode) {
		std::cout << ">> " << startNode->data <<std::endl;
		if (startNode->next != nullptr) {
			traverse(startNode->next);
		}
	};

};