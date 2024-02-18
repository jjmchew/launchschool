function partition(arr) {
  const pivot = arr[0];
  let left = 1;
  let right = arr.length - 1;

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

    console.log(arr);
  }
  // Swap pivot with the element at the right pointer
  [arr[0], arr[right]] = [arr[right], arr[0]];

  // Return modified arr
  return arr;
}

// test case:
console.log(partition([7, 3, 9, 8, 5, 1])); // [3, 5, 1, 7, 8, 9]