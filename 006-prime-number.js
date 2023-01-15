// A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));
console.log(isPrime(12));

// This function takes an integer n as input, and returns a boolean indicating whether the number is prime or not. it checks if the number is less than or equal to 1, if yes it's not a prime number. Then it uses a for loop to iterate from 2 to n-1, and at each iteration, it checks if n is divisible by the current number i using modulo operator (%), if yes then it's not a prime number and it returns false. If the for loop completes without finding a divisor, the number is prime and the function returns true.

// It's worth noting that this implementation has a time complexity of O(n) because the number of iterations performed by the algorithm increases linearly with the size of the input (n), making it less efficient for large inputs.
