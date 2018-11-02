// CREATING A NODE 
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// CLASS FOR THE DOUBLY LINKED LIST
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ADDING ONE ELEMENT AT THE END OF THE LIST
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldTail = this.tail;
      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // REMOVING ELEMENT FROM THE LAST 
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return this;
  }
  // REMOVING ONE ELEMENT FROM THE START 
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  // ADDING ONE ELEMENT AT THE START
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // FINDING THE ELEMENT AT A PERTICULAR INDEX
  get(index) {
    if (index < 0 || index >= this.length) return null;
    // FORM THE START
    let current, counter;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      // FROM THE END
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--
      }
    }
    return current;
  }
  // UPDATING THE NODE AT A PERTICULAR INDEX
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //INSERTING THE ELEMENT AT A PERTICULAR INDEX
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let currentNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = currentNode;
      currentNode.prev = newNode;
    }
    this.length++;
    return true;
  }
  // REMOVING A NODE FROM THE LIST AT A GIVEN INDEX
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift(index);
    if (index === this.length) return this.pop(index);
    let removedNode = this.get(index);
    let afterNode = removedNode.next;
    let beforeNode = removedNode.prev;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return true;
  }
  // PRINTING THE LIST IN THE FORM OF ARRAY FOR A CLEAR VIEW
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }
}
// CREATING A LIST
let list = new DoublyLinkedList();
