// What is recursion?
// Recursion is a programming technique in which a function calls itself, either directly or indirectly. It is used to solve problems that can be broken down into smaller, similar sub-problems.

// A function that uses recursion is called a recursive function. A recursive function typically has two parts: a base case and a recursive case. The base case defines the stopping condition, and the recursive case defines how to move closer to the base case.

// Here's an example of a simple recursive function in JavaScript that calculates the factorial of a given number:

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// This function takes an integer n as input, and returns the factorial of n. The base case is if n is 1, it returns 1. The recursive case is for any other number, it calls the function recursively with n-1 and multiplies it with n.
