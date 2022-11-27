=begin
12:28 pm - 12:38 pm : 10 minutes


Given an array of integers.  Take the array, find an index N where the sum of the integers to the left is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1

e.g., 
given [1, 2, 3, 4, 3, 2, 1]
return 3 since sum of [1, 2, 3] == sum of [3, 2, 1]

e.g., 
given [20, 10, -80, 10, 10, 15, 35]
return 0, since sum of [] == sum of [10, -80, 10, 10, 15, 35]

assume sum of empty array is 0

input
  - array of integers
output
  - integer : represents an index
    OR
    -1 : no answer
rules
  - assume no empty input arrays
  - sum of empty array is 0
  - sum of elements to L of index must equal elements to R of index
      - element at index isn't 'used'

algorithm
  - `split_array` (given index)
      - returns a subarray of elements to L of index and subarray of elements to R of index
  
  - `sum_array` (given an array)
      - account for sum of empty array is 0 (not nil)

      

  - iterate through each index position in given array
      - split the array at that index position
      - check if sum of L is equal to sum of R
          - if so:  return that index

  - return -1 as 'default' if no answer is found
notes
  - could use helper method to 'split' given array into L and R
  - may want to use a helper method for 'sum' of subarrays since sum of empty array defaults to nil, not 0

=end

def sum_array(array)
  return 0 if array.empty?
  array.inject(:+)
end

def split_array(array, index)
  left = array[0...index]
  right = array[index+1..-1]
  [left, right]
end

def find_even_index(array)
  (0...array.length).to_a.each do |index|
    left, right = split_array(array, index)
    return index if sum_array(left) == sum_array(right)
  end
  -1
end

# p find_even_index([]) #== -1
p find_even_index([1, 2, 3, 4, 3, 2, 1]) == 3
p find_even_index([1, 100, 50, -51, 1, 1]) == 1
p find_even_index([1, 2, 3, 4, 5, 6]) == -1
p find_even_index([20, 10, 30, 10, 10, 15, 35]) == 3
p find_even_index([20, 10, -80, 10, 10, 15, 35]) == 0
p find_even_index([10, -80, 10, 10, 15, 35, 20]) == 6
p find_even_index([-1, -2, -3, -4, -3, -2, -1]) == 3

