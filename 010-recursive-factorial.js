function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// This function takes an integer n as input, and returns the factorial of n. The base case is if n is 0, it returns 1. The recursive case is for any other number, it calls the function recursively with n-1 and multiplies it with n.

// It's important to note that the time complexity of this implementation is O(n) because as the input grows, the number of recursive calls grows linearly with the input size.
