function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Output: 3

// This function takes an integer n as input and returns the nth Fibonacci number. The base cases are if n is 0 or 1, it returns 0 or 1. The recursive case is for any other number, it calls the function recursively with n-1 and n-2 and adds the results. This is the basic definition of fibonacci sequence.

// This implementation is simple, but it has a time complexity of O(2^n) as it recalculates the same values multiple times which can be very slow for large inputs.
