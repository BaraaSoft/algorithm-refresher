function Node(value) {
  this.value = value;
  this.next = null;
}

const buildLinkedList = (arr) => {
  let start = new Node(arr[0]);
  let curr = start;

  for (let i = 1; i < arr.length; i++) {
    let nextNode = new Node(arr[i]);
    curr.next = nextNode;
    curr = nextNode;
  }
  return start;
};

let linkedList = buildLinkedList([1, 2, 3]);

const print = (linkedList) => {
  while (linkedList) {
    console.log(linkedList.value);
    linkedList = linkedList.next;
  }
};

const reverse = (linkedList) => {
  // tail <- mid <- head
  let tail = null;
  let mid = linkedList.next;
  let head = mid.next;

  let curr = linkedList;

  while (curr) {
    // (tail = curr) <- mid <- head
    curr.next = tail;
    tail = curr;

    // tail <- curr = mid <- head
    curr = mid;

    // tail <- curr <-  mid = head
    mid = head;

    // tail <- mid  <- head = head.next
    if (head) head = head.next;
  }

  return tail;
};

print(linkedList);

print(reverse(linkedList));
