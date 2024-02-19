// this implementation uses the middle element as pivot

function partition(arr, low, high) {
  const pivotIndex = Math.floor((low + high) / 2);
  const pivot = arr[pivotIndex];
  let left = low;
  let right = high;

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left > right) {
      break;
    }

    // Swap values at left and right pointers
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  // Return the pivot index - indicates the position where the pivot should be placed after partitioning
  return left;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  const pivotIndex = partition(arr, low, high);
  // check if elements exist to the left of the pivot index to be sorted
  if (low < pivotIndex - 1) {
    quickSort(arr, low, pivotIndex - 1);
  }

  // check if elements exist to the right of the pivot index to be sorted
  if (pivotIndex < high) {
    quickSort(arr, pivotIndex, high);
  }
}

const arr = [7, 3, 9, 8, 5, 1];
quickSort(arr);
console.log(arr); // Output: [1, 3, 5, 7, 8, 9]