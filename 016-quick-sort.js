// Quick sort is a divide-and-conquer algorithm that sorts an array by partitioning it into two smaller arrays, one with elements less than a chosen "pivot" element and one with elements greater than the pivot. It then recursively sorts the two partitions until the entire array is sorted.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([3, 0, 2, 5, -1, 4, 1]));
// Output: [-1, 0, 1, 2, 3, 4, 5]

// It's important to note that this version of quick sort has O(n^2) time complexity in the worst case scenario, which is when the pivot element is always the smallest or largest element, causing one partition to be empty and the other partition to be the same size as the original array.

// It's also important to mention that the space complexity of this version is O(n) because it uses additional arrays for partitioning.
