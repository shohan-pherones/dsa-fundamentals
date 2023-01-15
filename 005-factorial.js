// The factorial of a number n is the product of all the positive integers less than or equal to n.

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// This function takes an integer n as input, and returns the factorial of n. It uses a for loop to iterate from 1 to n, and at each iteration, it multiplies the result by the current number. This will give the factorial of the number passed as the argument.

// It's worth noting that this implementation has a time complexity of O(n) because the number of operations performed by the algorithm increases linearly with the size of the input (n).
