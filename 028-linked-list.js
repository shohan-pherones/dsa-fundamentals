// A linked list is a data structure that consists of a sequence of elements, each of which contains a reference (or "link") to the next element in the sequence.

// There are several benefits to using a linked list data structure:

// Dynamic size: Linked lists can be easily resized, as elements can be inserted or removed in constant time.

// Efficient insertion and deletion: Inserting or deleting an element from a linked list takes constant time, as it only requires updating the links between the elements.

// Flexibility: Linked lists can be used to implement various types of data structures, such as stacks, queues, and associative arrays.

// Memory efficient: Linked lists can be implemented using only a few bytes of overhead per element, as each element only needs to store a reference to the next element in the list.

// Cache-friendly: linked list's elements are stored contiguously in memory which is cache-friendly.

// Versatility: Linked lists can be used to implement data structures such as hash tables, which can be more efficient than other data structures for certain types of operations.

// Good for Real-time systems: As linked lists have constant time insertion and deletion, they are well suited for real-time systems where time constraints are critical.

// There are several types of linked lists, including:

// Singly Linked List: In a singly linked list, each element (or "node") contains a reference to the next element in the list, but not the previous one.

// Doubly Linked List: In a doubly linked list, each element contains a reference to both the next and previous elements in the list.

// Circular Linked List: In a circular linked list, the last element in the list points back to the first element, creating a loop.

// Multi-linked List: Multi-linked list consist of multiple linked lists, each list is called a dimension and it's used to represent multi-dimensional data.

// Skip List: Skip lists are a probabilistic data structure that allow for efficient search, insertion, and deletion of elements. They are based on the idea of a linked list, but with additional "skip" links that allow for faster traversal.

// XOR Linked List: XOR linked list stores the memory address of the next node using the bitwise XOR operation. It allows for efficient traversal of the list in both directions and constant-time insertions and deletions.

// It's important to note that all linked lists have a similar time complexity when it comes to insertion and deletion (O(1)) but have different time complexity when it comes to traversal and searching(O(n) for singly and doubly linked lists and O(log n) for Skip List).

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  remove(data) {
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.data === data) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.length--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  find(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let nextNode = null;
    while (current) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    this.head = previous;
  }

  getData() {
    let current = this.head;
    let data = [];
    while (current) {
      data.push(current.data);
      current = current.next;
    }
    return data;
  }

  getLength() {
    return this.length;
  }
}

const myList = new LinkedList();

// add
myList.add(10);
myList.add(15);
myList.add(20);
myList.add(40);
myList.add(55);

// remove
myList.remove(20);

console.log(myList.find(1));
console.log(myList.getLength());
myList.reverse();
console.log(myList.getData());
console.log(myList.tail.data);
