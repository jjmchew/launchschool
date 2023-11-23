# Q1

```javascript
function test(n) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");
  }
}
```
- time complexity is O(N)
- space complexity is O(1) (only 1 thing is stored and repeated N times)

# Q2
```javascript
function test(n) {
  for (let i = n; i >= 1; i /= 2) {
    console.log("Hello!");
  }
}
```
- time complexity: O(logN) : value of i is divided by 2 for each iteration
- space complexity: O(1)

# Q3
```javascript
function test(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}
```
- time complexity: O(N^2) : nested loops of every element
- space complexity: O(N^2) : the matrix is size n * n, grows quadratically

# Q4
```javascript
function test(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      console.log("Hello!");
    }
  }
}
```
- time complexity:
  - outer loop: O(N)
  - inner loop: O(logN)
  - overall O(NlogN)
- space complexity: O(1)

# Q5
```javascript
function test(n, m) {
  for (let i = 0; i < n; i++) {
    console.log("Hello!");
  }
  for (let j = 0; j < m; j++) {
    console.log("World!");
  }
}
```
- time complexity : O(n) + O(m)
- space complexity : O(1)

# Q6
```javascript
function test(n) {
  for (let i = 0; i < 2 * n; i++) {
    console.log("Hello!");
  }
}
```
- time complexity: O(N) (constant 2 can be ignored)
- space complexity: O(1)