// this implementation uses the first element of the (sub-)array as pivot

function partition(arr, low = 0, high = arr.length - 1) {
  const pivot = arr[low];
  let left = low + 1;
  let right = high;

  while (true) {
    while (left <= right && arr[left] < pivot) {
      left++;
    }

    while (left <= right && arr[right] >= pivot) {
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

  // Swap pivot with the element at the right pointer
  // thus putting it at its correct spot
  [arr[low], arr[right]] = [arr[right], arr[low]];

  // Return the pivot index
  return right;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

const arr = [7, 3, 9, 8, 5, 1];
quickSort(arr);
console.log(arr); // Output: [1, 3, 5, 7, 8, 9]