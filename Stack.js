// CREATING A NODE
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// CREATING A STACK CLASS
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // PUSHING THE ELEMENT AT THE BEGINING OF THE STACK
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode
    } else {
      let current = this.first;
      this.first = newNode;
      newNode.next = current;
    }
    this.size++;
    return this
  }
  // REMOVING THE ELEMENT FROM THE STARTING OF THE LIST
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.tail = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return this;
  }
}
// CREATING THE STACK
let stack = new Stack();