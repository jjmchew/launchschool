=begin
10:17 pm - 10:36 pm : 19 minutes


The maximum sum subarray problem involves finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4] should be 6: [4, -1, 2, 1]

Easy case is when the whole array is made up of only positive numbers and the maximum sum is the sum of the whole array.  If the array is made up of only negative numbers, return 0 instead

Empty array is considerd to have zero greatest sum.  Note that the empty array is also a valid subarray

input
  - array of integers : +ve and -ve
output
  - integer
rules
  - output is 0 if array is empty OR all elements are -ve
  - if all elements are +ve, then return sum of all elements in array
  - otherwise, output is the maximum possible sum from a contiguous subset of the array given

example
  [-2, 1, -3, 4, -1, 2, 1, -5, 4]

algorithm
  - find all possible contiguous subarrays in given array
      - initialize a collection array 'subarrays'
      - iterate through each element of array using it as the 'start index' (index 0 ... array.length )
        - iterate from start+1 ... array.length using this as the 'finish index'
          - take a subarray from start index to finish index and add it to collection array


  - iterate through the set, look for maximum sum and return it

notes:
  - could get all possible subarrays, then sum each, find max
  - could look at positive numbers - try and find sets using the maximum # of positive numbers and minimum # of -ve
  - 
=end

def get_subarrays(array)
  subarrays = []
  (0...array.length).to_a.each do |start|
    (start+1 ... array.length).to_a.each do |finish|
      subarrays << array[start..finish]
    end
  end

  subarrays
end

def max_sequence(array)
  return 0 if array.empty?
  return 0 if array.all? { |num| num < 0 }
  return array.inject(:+) if array.all? { |num| num > 0 }

  subarrays = get_subarrays(array)
  max_sum = 0
  subarrays.each do |subarray| 
    sum = subarray.inject(:+)
    max_sum = sum if sum > max_sum
  end
  max_sum
end

p max_sequence([]) == 0
p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
p max_sequence([11]) == 11
p max_sequence([1, 2, 3, 4, 5]) == 15
p max_sequence([-32]) == 0
p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) == 12


