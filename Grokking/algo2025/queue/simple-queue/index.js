class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // Head of the queue
        this.rear = null;  // Tail of the queue
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const removedData = this.front.data;
        this.front = this.front.next;
        if (this.front === null) { // If the queue becomes empty
            this.rear = null;
        }
        this.size--;
        return removedData;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}