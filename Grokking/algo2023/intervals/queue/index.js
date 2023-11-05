function Queue() {
  this.size = 0;
  this.top = null;
}

function Node(data) {
  this.value = data;
  this.next = null;
}

Queue.prototype.enqueue = function (data) {
  const newNode = new Node(data);
  let curr = this.top;

  if (!curr) {
    this.top = newNode;
  } else {
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  this.size++;
};

Queue.prototype.dequeue = function () {
  if (this.size == 0) return null;
  const prevTopNode = this.top;
  this.top = this.top.next;
  this.size--;

  return prevTopNode.value;
};

const myQueue = new Queue();
myQueue.enqueue('Baraa');
myQueue.enqueue('Mirghani');
myQueue.enqueue('Mohamed');
myQueue.enqueue('Abuzaid');
console.log({ queueSize: myQueue.size });

while (myQueue.size > 0) {
  console.log(myQueue.dequeue());
}

myQueue.enqueue('Baraa');
myQueue.enqueue('Mirghani');
myQueue.enqueue('Mohamed');
myQueue.enqueue('Abuzaid');
console.log({ queueSize: myQueue.size });
while (myQueue.size > 0) {
  console.log(myQueue.dequeue());
}
myQueue.dequeue();
console.log({ queueSize: myQueue.size });
