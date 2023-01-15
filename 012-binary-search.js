// Binary search is a search algorithm that finds the position of a target value within a sorted array. It repeatedly divides the search interval in half and checks whether the middle value is greater or less than the target value. The time complexity of this algorithm is O(log n) which is much more efficient than linear search.

function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1

// This function takes an array arr and an element x as input and returns the index of the first occurrence of x in the array, or -1 if it's not found. It uses a while loop to repeatedly divide the search interval in half. It initializes two pointers left and right to the first and last elements of the array, respectively. The mid variable is used to find the middle element of the array. If the middle element is less than the target value, the left pointer is moved to mid + 1 and if the middle element is greater than the target value, the right pointer is moved to mid - 1. This process is continued until either the target value is found or the search interval becomes empty.

// It's important to note that this implementation requires the input array to be sorted, otherwise, it will not work.
