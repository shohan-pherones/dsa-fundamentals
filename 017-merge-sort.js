// Merge sort is a divide-and-conquer algorithm that sorts an array by dividing it into two smaller arrays and then merging them in a sorted order. It repeatedly splits the array in half until each sub-array has only one element, then it merges the sub-arrays in a sorted order to obtain the final sorted array.

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  var il = 0;
  var ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
}
console.log(mergeSort([3, 0, 2, 5, -1, 4, 1]));
// Output: [-1, 0, 1, 2, 3, 4, 5]

// The time complexity of the merge sort algorithm is O(n log n) in the average and best case, and O(n log n) in the worst case. This is because in the worst case, merge sort needs to divide the array in half, recursively sort each half, and then merge the halves back together. The divide step takes O(log n) time, and the merge step takes O(n) time, so the overall time complexity is O(n log n). It's worth noting that the space complexity of merge sort is O(n), it's because it uses additional arrays during the merge step to store the sorted elements.
