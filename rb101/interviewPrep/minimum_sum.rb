# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive
# numbers in the array. If the array contains fewer than 5
# elements, the method should return nil.

=begin
2:25 pm - 2:36 pm : 11 minutes

input
  - array of numbers (`array`)
output
  - integer : *minimum (smallest) sum of 5-element subarray
rules
  - subarray : 5 consecutive elements from given array
  - if given array has less than 5 elements, return nil

algorithm
  - find all possible 5 element subarrays (`get_subarrays`)
      - initialize a collection array
      - iterate from index 4 (finish) to length of `array` - 1
        - assume substrings START at index - 4
        - get substring and add it to a collection array 
      - return the collection array

  - initialize a 'collection array' to store sums of each subarray
  - iterate over the subarrays
      - calculate the sum of each subarray, store it in the collection array
  - find the minimum sum (number) from collection array and return it


notes
  - deal with number of elements first
  - use inject for sum of subarrays
  - array[0..4]
=end

def get_subarrays(array)
  subarrays = []
  4.upto(array.length - 1) do |finish|
    subarrays << array[(finish-4)..finish]
  end
  subarrays
end

def minimum_sum(array)
  return nil if array.length < 5

  subarrays = get_subarrays(array)
  sums = subarrays.map { |sub| sub.inject(:+) }
  sums.min
end

# Examples:

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

# The tests above should print "true".