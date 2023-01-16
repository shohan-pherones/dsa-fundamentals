// Insertion sort is a simple sorting algorithm that builds the final sorted list one item at a time. It iterates through the list and for each item, it compares it with the items that come before it and finds the correct position for it in the sorted list.

function insertionSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]));
// Output: [-1, 0, 1, 2, 3, 4, 5]

// Insertion sort has O(n^2) time complexity in worst case but it performs better than bubble sort if the input array is mostly sorted.

// The function starts by defining a variable "len" which is equal to the length of the input array. Then, it starts a for loop that will iterate from index 1 to the end of the array. The variable "i" is used as the index for the current element being considered for insertion. The next step is to create a variable "key" which is equal to the current element being considered for insertion, which is stored in "arr[i]". Then, another variable "j" is initialized as "i - 1" which will be used as the index for the element that precedes the current element being considered for insertion. The next step is a while loop that will check if "j" is greater than or equal to 0 and if "arr[j]" is greater than "key". If both conditions are true, it will swap the elements. The while loop is used to move all the elements greater than the key to the right by one position. The element at index j is compared to the key and if it is greater than key, it is shifted to the right by one position. Finally, the key is placed at the correct position in the array. Once the for loop completes the array is sorted in ascending order and the function returns the sorted array.

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]));
// Output: [-1, 0, 1, 2, 3, 4, 5]
