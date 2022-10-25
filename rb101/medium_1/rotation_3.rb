# input:
#   - integer of 1 or more digits

# output:
#   - a number rotated length - 1 times
#       - 1st rotation, all digits rotated
#       - 2nd rotation, digit 1 (index 0) fixed
#       - 3rd rotation, digit 1, 2 (index 0, 1) fixed,  etc

# assumptions / constraints:
#   - assume input > 0
#   - if a zero is rotated to start of number (e.g., 1st rotation), zero gets dropped

# data structure:
#   - arrays / strings (to make use of previously developed defs)

# algorithm:
#   1.  loop and rotate_rightmost_digits with 'rotate' parameter starting at num.length
#       - reduce rotate parameter by 1 each iteration until it 2 (no need to run final iteration)

def rotate_array(array)  # UPDATED to simplify (support debugging)
  array[1..array.length-1] + [array[0]]
end

def rotate_rightmost_digits(num, rotate) # from prior problem
  array = num.to_s.split('')

  p1 = array[0, array.length - rotate]
  p2 = array[(array.length - rotate)..array.length]

  new_p2 = rotate_array(p2)
  (p1+new_p2).join('').to_i
end

def max_rotation(num)
  length = num.to_s.length
  new_num = num
  loop do
    new_num = rotate_rightmost_digits(new_num, length)
    length -= 1
    break if length <= 1 # this condition was critical tried to loop when length == 0
  end
  new_num
end

# test cases / examples:
p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845
