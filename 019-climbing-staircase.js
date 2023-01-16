// Climbing Staircase problem is a dynamic programming problem where you have to find the number of ways to reach the top of a staircase, given that you can take either 1 or 2 steps at a time. This problem can be solved using a recursive approach or using dynamic programming.

function climbStairs(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
}
console.log(climbStairs(4));
// Output: 5

// This recursive solution finds the number of ways to climb the staircase by breaking the problem into smaller sub-problems. It finds the number of ways to reach the nth step by adding the number of ways to reach the (n-1)th step and the number of ways to reach the (n-2)th step.

// This solution has an exponential time complexity of O(2^n) because it solves the same sub-problems
