function isPowerOf2(n) {
  if (n <= 0) return false;
  while (n % 2 == 0) {
    n = n / 2;
  }
  return n == 1;
}
console.log(isPowerOf2(16)); // Output: true
console.log(isPowerOf2(18)); // Output: false

// This function takes an integer n as input, and returns a boolean indicating whether the number is a power of 2 or not.

// It uses a while loop to divide the number by 2 until it becomes odd or 1, if the result is 1 the number is power of 2 otherwise it's not.

// It's worth noting that this implementation has a time complexity of O(log n) because the number of iterations performed by the algorithm increases logarithmically with the size of the input (n), making it less efficient than the previous solution.
