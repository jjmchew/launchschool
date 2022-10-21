# inputs:
#   positive integer

# output:
#   array of each digit in number

# assumptions:
#   integer can be very large (to max of class)
#   returned list is an array of numbers

# mental model:
#   convert number to a string
#   use string #split to separate into digits
#   convert each digit back into a number and add to the final list

# test cases
#   see provided cases

def digit_list(num)
  num_strs = num.to_s.split("")
  # p num_strs
  num_list = []
  num_strs.each { |char| num_list << char.to_i }
  # p num_list
  num_list
end

puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true

# added test cases
puts digit_list(0) == [0]                     # => true
puts digit_list(2_182_730_282) == [2, 1, 8, 2, 7, 3, 0, 2, 8, 2] # => true

