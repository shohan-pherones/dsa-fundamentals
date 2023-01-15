function binarySearch(arr, x, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === x) return mid;
  if (arr[mid] > x) {
    return binarySearch(arr, x, left, mid - 1);
  } else {
    return binarySearch(arr, x, mid + 1, right);
  }
}
console.log(binarySearch([1, 2, 3, 4, 5], 3, 0, 4)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6, 0, 4)); // Output: -1

// This function takes an array arr, an element x, and the left and right pointer left and right as input and returns the index of the first occurrence of x in the array, or -1 if it's not found. The base case is when left pointer is greater than the right pointer, it returns -1. The recursive case is for any other case, it finds the middle element of the array, compares it with the x and based on the comparison it calls the function recursively with either left or right pointer.

// It's important to note that this implementation requires the input array to be sorted, otherwise, it will not work. Also, this implementation has the same time complexity as the iterative version which is O(log n) but it is less efficient due to the overhead of recursion and the possibility of stack overflow errors.
