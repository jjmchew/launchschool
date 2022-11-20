=begin
input
  - array of integers : any number of integers
output
  - a string sentence 'The result is #' where # is a float number : 3 decimal places
  - calculate by multiplying all elements together, then divide by the number of elements
constraints / assumptions
  - no empty arrays as argument
algorithm
  - set a 'collection' object to 1.0 (since we're multiplying, and we want a float)
  - iterate across all numbers in the given array
  - then divide by the number of elements in the array

=end

def show_multiplicative_average(array)
  total = array.reduce(1.0) { |num, total| total *= num }
  "The result is #{format('%.03f',total / array.length)}"
end

p show_multiplicative_average([3, 5])                # => The result is 7.500
p show_multiplicative_average([6])                   # => The result is 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667
