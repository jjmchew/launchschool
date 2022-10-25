# input:
#   - number : integer of 1 or more digits, always positive
#   - rotate : should be less than the length of 'number'

# output:
#   - a number, with the last 'rotate' # of digits rotated

# assumptions / constraints:
#   - if rotate == 1, returns original number

# data structure:
#   - convert digits to array to use prior rotate method

# algorithm:
#   1.  convert number to string, then array of characters
#   2.  need to separate array into 2 parts
#         part 1: (0 .. array.length - rotate - 1), 
#         part 2: (array.length - rotate .. array.length)

#         e.g. 0 1 2 3 4
#              1 2 3 4 5

#   3.  rotate 2nd part
#   4.  re-combine parts 1 & 2 into final array
#   5.  convert back into a string, then integer

def rotate_array(array)  # from prior problem
  new_array = array + [array[0]]
  new_array.shift

  new_array
end

def rotate_rightmost_digits(num, rotate)
  array = num.to_s.split('')

  p1 = array[0, array.length - rotate]
  p2 = array[(array.length - rotate)..array.length]

  new_p2 = rotate_array(p2)
  (p1+new_p2).join('').to_i
end

# test cases / examples:
p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917