// A stack is a linear data structure that follows the Last In First Out (LIFO) principle. It's a collection of elements, where the last element added is the first element to be removed (pop).

// A stack has two main operations: push and pop. The push operation adds an element to the top of the stack, and the pop operation removes the top element from the stack.

// In JavaScript, you can implement a stack using an array and the push() and pop() methods, like this:

let myStack = [];

// push
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack); // Output: [1, 2, 3]

// pop
let top = myStack.pop();
console.log(top); // Output: 3
console.log(myStack); // Output: [1, 2]

// A stack can also have a peek operation, which returns the top element without removing it.

let top2 = myStack[myStack.length - 1];
console.log(top); // Output: 2
console.log(myStack); // Output: [1, 2]

// Stacks are widely used in many areas such as expressions evaluation and parsing, undo-redo functionality, backtracking and traversals in graphs, and many others.

// In conclusion, a stack is a linear data structure that follows the Last In First Out (LIFO) principle, and it's implemented using an array and push, pop and peek operations.
