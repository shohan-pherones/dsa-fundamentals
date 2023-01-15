// What is Big O notation?
// Big O notation is a way to express the upper bound on the number of operations an algorithm will perform as the size of the input grows towards infinity. It is commonly used to describe the time complexity of an algorithm, but can also be used to describe space complexity.

// The notation is written as O(f(n)), where f(n) is a function that describes the number of operations the algorithm will perform in relation to the size of the input (n). For example, an algorithm that takes linear time, or O(n), will take proportionally longer to run as the size of the input (n) increases. An algorithm that takes constant time, or O(1), will take the same amount of time regardless of the size of the input.

// The best to worst Big O notations are:
// 01. O(1) or Constant Time: The algorithm takes a constant amount of time regardless of the size of the input. This is considered the best case scenario.

// 02. O(log n) or Logarithmic Time: The algorithm takes time proportional to the logarithm of the size of the input. This is considered very efficient.

// 03. O(n) or Linear Time: The algorithm takes time proportional to the size of the input.

// 04. O(n log n) or Linear Logarithmic Time: The algorithm takes time proportional to the size of the input multiplied by the logarithm of the size of the input. This is considered efficient.

// 05. O(n^c) or Polynomial Time: The algorithm takes time proportional to the size of the input raised to some power c (c > 1). This is considered less efficient than the above complexities.

// 06. O(c^n) or Exponential Time: The algorithm takes time proportional to a constant raised to the size of the input. This is considered very inefficient.

// 07. O(n!) or Factorial Time: The algorithm takes time proportional to the factorial of the size of the input. This is considered the worst case scenario.

// How to calculate time complexity?
// Calculating time complexity involves analyzing the number of operations an algorithm performs as a function of the size of the input. The steps to calculate time complexity are:

// 01. Identify the basic operation: This is the single operation that is performed the most and has the greatest impact on the algorithm's running time.

// 02. Determine the number of times the basic operation is executed: This is usually a function of the size of the input.

// 03. Express the number of times the basic operation is executed as a function of the size of the input: This is the time complexity of the algorithm.

// Here's an example of how to calculate the time complexity of a JavaScript function that finds the maximum value in an array:

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 01. The basic operation is the comparison arr[i] > max.
// 02. The comparison is executed once for each element in the array, which is arr.length times.
// 03. The time complexity of the algorithm is O(n), or linear time, because the number of times the basic operation is executed is directly proportional to the size of the input (n = arr.length).

// It's worth noting that the time complexity of an algorithm can be affected by the specific implementation, and so it's good practice to always test the performance of an algorithm with different input sizes to see how it behaves in practice.

// Here's an example of a JavaScript function that has a time complexity of O(1):

function getFirstElement(arr) {
  return arr[0];
}

// This function takes an array as an input, and returns its first element. No matter how large the input array is, the function will always perform the same operation: returning the element at index 0. Therefore, the time complexity of this function is O(1), or constant time.

// Here's an example of a JavaScript function that implements binary search:

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// This function takes an ordered array and a target value as input, and returns the index of the target value in the array if it exists, or -1 if it does not. It works by repeatedly dividing the search interval in half, discarding the half in which the target value cannot lie, until the target value is found or the search interval is empty.

// The time complexity of this algorithm is O(log n) because at each iteration of the while loop, the size of the search interval is halved. If the input array has n elements, the maximum number of iterations required to find the target value is log2(n). Therefore, the time complexity of the algorithm is O(log n).

// Shortcut ways to calculate time complexity:
// 01. Counting the number of nested loops: The number of nested loops an algorithm has will affect the time complexity of the algorithm. For example, the following algorithm has a time complexity of O(n^2) because it has two nested loops:

function nestedLoops(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// As the size of the input (n) increases, the number of operations performed by the algorithm (n^2) increases quadratically, making it less efficient for large inputs.

// 02. Counting the number of recursive calls: The number of recursive calls an algorithm makes will affect the time complexity of the algorithm. For example, the following algorithm has a time complexity of O(2^n) because it makes two recursive calls each time:

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// As the input size (n) increases, the number of recursive calls increases exponentially, making it less efficient for large inputs.

// 03. Analyzing the input/output relationship: The relationship between the size of the input and the size of the output can indicate the time complexity of an algorithm. For example, the following algorithm has a time complexity of O(1) because the size of the output is always 1, regardless of the size of the input:

function getLastElement(arr) {
  return arr[arr.length - 1];
}

// 04. Identify the most complex operation: Identifying the most complex operation that occurs in an algorithm and use that as the basis for calculating the time complexity. For example, the following algorithm has a time complexity of O(n log n) because the sorting operation has a time complexity of O(n log n) and the rest of the operations are O(n)

function sortAndCount(arr) {
  arr.sort();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

// Big O time complexity for objects in js:
// Accessing an element by its key: O(1) or constant time.
// Adding or deleting an element: O(1) or constant time.
// Iterating over the keys or values: O(n) or linear time.
// Finding the size of an object: O(1) or constant time.

// Big O time complexity for arrays in js:
// Accessing an element by index: O(1) or constant time.
// Adding or deleting an element at the end of the array: O(1) or constant time.
// Adding or deleting an element at the beginning of the array: O(n) or linear time.
// Finding the size of an array: O(1) or constant time.
// Iterating over an array: O(n) or linear time.
// Searching an element in an array: O(n) or linear time.
