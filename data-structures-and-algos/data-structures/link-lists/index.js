class Node {
  // Your code here!
  constructor (value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  // Your code here!
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToTail(value){
    this.size++;
    let newNode = value;
    let current = this.tail
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.previous = current;
      //return newNode;
    }
  
    this.head = this.tail = newNode;
    //return newNode;
  }

  addToHead(value){
    this.size++;
    let newNode = value;
  
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }
  
    this.head = this.tail = newNode;
  }

  removeTail() {
    const removedTail = this.tail
    if (!removedTail) return null
    if (removedTail.previous) {
      this.tail = removedTail.previous
      this.tail.next = null
    } else {
      this.head = null
      this.tail = null
    }
    this.size--;
    return removedTail
  }

removeHead() {
  if (this.head) {
    const removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return removedNode;
  }
}

print() {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
}
module.exports = {
  Node,
  LinkedList
}