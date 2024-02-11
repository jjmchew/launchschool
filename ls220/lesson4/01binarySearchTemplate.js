// recommended LS template for binary search

let left = 0
let right = array.length - 1
while (left <= right) {
  mid = Math.floor((left + right) / 2)
  if (array[mid] == target) {
    // Optional early return
  // } else if (***comparison***) { // note this line needs to be updated
    left = mid + 1
  } else {
    right = mid - 1
  }
}

// Most often, if the target is not found, additional handling
// or returning a specific value is needed. In most cases it will
// be the value that `left` variable holds.