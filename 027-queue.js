// A queue is a linear data structure that follows the First In First Out (FIFO) principle. It's a collection of elements, where the first element added is the first element to be removed (dequeue).

// A queue has two main operations: enqueue and dequeue. The enqueue operation adds an element to the rear of the queue, and the dequeue operation removes the front element from the queue.

//In JavaScript, you can implement a queue using an array and the push() and shift() methods, like this:

let myQueue = [];

// enqueue
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue); // Output: [1, 2, 3]

// dequeue
let front = myQueue.shift();
console.log(front); // Output: 1
console.log(myQueue); // Output: [2, 3]

// A queue can also have a peek operation, which returns the front element without removing it.

let front2 = myQueue[0];
console.log(front); // Output: 2
console.log(myQueue); // Output: [2, 3]

// Queues are widely used in many areas such as simulations, scheduling, background tasks, and many others.
