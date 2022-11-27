# Write a method that takes an array of integers and returns the
# two numbers that are closest together in value.

=begin
3:01 pm - 3:14 pm : 13 minutes

input
  - array of integers
output
  - subarray : 2 integers closest together in value
rules
  - if the difference between 2 numbers is the same, need to return the first set of numbers (e.g., 3rd test case)

algorithm
  - get set of all possible pairs of numbers within given array `subarrays` (`get_pairs`)
      - iterate from 0 ... array.length  > 'first' (element index)
          - iterate from 'first'+1 ... array.length > 'second' (element index)
              - add the element at 'first' and 'second' to a new subarray, add this subarray to `subarrays` 

  - iterate across `subarrays`
      - find the minimum difference and return that subarray
  
  
notes
  - when getting the difference, easiest to take absolute value (don't need to worry about first / second number)
  - need to find all possible pairs of numbers
  - can use `min_by` to find subarray with smallest difference and then just return that subarray
=end

def get_pairs(array)
  pairs = []
  (0...array.length).to_a.each do |first|
    ((first+1)...array.length).to_a.each do |second|
      # p "#{first} #{second}"
      pairs << [ array[first], array[second] ]
    end
  end
  pairs
end

def closest_numbers(array)
  subarrays = get_pairs(array)
  subarrays.min_by { |pair| (pair[0]-pair[1]).abs }
end

# Examples:

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]

# The tests above should print "true".