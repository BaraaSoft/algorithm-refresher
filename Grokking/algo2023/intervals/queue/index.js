function Node(val, next) {
  this.val = val;
  this.next = next;
}

function Queue() {
  this.left = null;
  this.right = null;
  this.count = 0;
}

Queue.prototype.enqueue = function (value) {
  this.count++;
  if (!this.left && !this.right) {
    this.left = this.right = new Node(value, null);
    return value;
  }

  let newNode = new Node(value);

  this.right.next = newNode;
  this.right = newNode;
  return value;
};

Queue.prototype.dequeue = function () {
  this.count--;
  if (!this.left) {
    this.count = 0;
    this.left = this.right = null;
    return null;
  }
  let value = this.left.val;
  this.left = this.left.next;
  return value;
};

const myQueue = new Queue();
myQueue.enqueue('Baraa');
myQueue.enqueue('Mirghani');
myQueue.enqueue('Mohamed');
myQueue.enqueue('Abuzaid');
console.log({ queueSize: myQueue.count });
while (myQueue.count > 0) {
  console.log(myQueue.dequeue());
}

myQueue.enqueue('Baraa');
myQueue.enqueue('Mirghani');
myQueue.enqueue('Mohamed');
myQueue.enqueue('Abuzaid');
console.log({ queueSize: myQueue.count });
while (myQueue.size > 0) {
  console.log(myQueue.dequeue());
}
console.log('>> last', myQueue.dequeue());
console.log({ queueSize: myQueue.count });

// last check point

myQueue.enqueue('Baraa');
myQueue.enqueue('Mirghani');
console.log({ top1: myQueue.dequeue() });
console.log({
  top2: myQueue.dequeue(),
  size: myQueue.count,
});
