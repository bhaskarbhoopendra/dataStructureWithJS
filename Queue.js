// CREATING A NODE
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// CREATING A QUEUE CLASS
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // ADDING THE ELEMENT AT THE LAST
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentTail = this.last;
      currentTail.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  // REMOVING THE ELEMENT FORM START
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.tail = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return this;
  }
}
// CREATING A QUEUE
let queue = new Queue();