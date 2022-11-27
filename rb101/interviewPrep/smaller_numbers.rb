# Given an array of numbers, for each number find out how many numbers
# in the array are smaller than it. When counting numbers, only count
# unique values. That is, if a given number occurs multiple times in
# the array, it should only be counted once.

=begin
2:10 pm - 2:24 pm : 14 minutes

input
  - array of numbers
output
  - array of integers:  each element is a count of how many other numbers are smaller than the element at the same index position in the given array
rules
  - when doing the count, only count numbers that are unique, e.g., if the digit 2 is repeated in input array, only count once
  - assume all numbers are integers; +ve or -ve
  - assume no empty input arrays
  - # of elements in input array is the same as elements in the output array (repeat the count, as necessary)

data structure
  - store results from 'count' in a hash

algorithm
  - create a duplicate of given array which contains only the unique elements `uniq_array`
  - iterate over each element of `uniq_array` and get the count of elements that are less than the current element
      - store results in a `count` hash

  - iterate over the given array
      - use the `count` hash to populate a new array of output counts

notes
  - could use a 'working' input array to track unique elements
  - helper method `count_num` : count elements elements are less than given number
=end

def count_num(array, num)
  array.count { |element| element < num }
end

def smaller_numbers_than_current(array)
  uniq_array = array.dup.uniq
  count = Hash.new(0)
  
  uniq_array.each do |num|
    count[num] = count_num(uniq_array, num)
  end

  array.map { |num| count[num] }
  
end

# Examples:
p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]

# The tests above should print "true".