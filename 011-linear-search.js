function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // Output: -1

// This function takes an array arr and an element x as input and returns the index of the first occurrence of x in the array, or -1 if it's not found. It uses a for loop to iterate through the elements of the array, starting at the first element. For each element, it compares it with x using the equality operator === and if they match, it returns the current index. If the loop completes and the element is not found, the function returns -1

// It's worth noting that this implementation has a time complexity of O(n) because as the input grows, the number of iterations performed by the algorithm increases linearly with the size of the input (n), making it less efficient for large arrays.
