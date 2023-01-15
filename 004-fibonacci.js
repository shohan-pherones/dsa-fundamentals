// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
console.log(fibonacci(10));

// This function takes an integer n as input, and returns the nth number in the Fibonacci sequence. It uses a for loop to iterate from 2 to n, and at each iteration, it calculates the next number in the sequence by adding the previous two numbers and stores it in an array.

// It's worth noting that this implementation is more efficient than the recursive one as it has a time complexity of O(n) which means that the number of operations performed by the algorithm increases linearly with the size of the input (n).

// It's not possible to calculate the Fibonacci sequence with O(1) time complexity because the value of the nth term of the sequence depends on the values of the previous terms, and the number of terms increases as n increases. Therefore, in order to calculate the nth term of the sequence, we need to calculate the previous terms first, and the time complexity will be at least O(n).
