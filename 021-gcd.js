// The Euclidean algorithm is a method for finding the greatest common divisor (GCD) of two or more integers. The basic idea behind the algorithm is to repeatedly subtract the smaller number from the larger number until the two numbers are equal. The GCD is then the last non-zero remainder.

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log(gcd(48, 18));
// Output: 6

// This function takes two integers as input, and it uses a recursive approach. It checks if b is equal to 0, and if it is, it returns a. If b is not 0, it calls the function with b and the remainder of a divided by b as the input.

// This function uses the property of mod operator, the remainder of a divided by b is the same as the remainder of a - (a/b)*b

// The time complexity of this algorithm is O(log min(a,b)) which is very efficient and also it's easy to implement.
