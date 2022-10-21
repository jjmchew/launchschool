# inputs
#   integer:  +ve, -ve, or 0

# output
#   boolean (true or false)

# assumptions / constraints:
#   can't use #odd or #even

# see test cases provided (note 0 is not odd)

#my initial version
# def is_odd?(num)
#   if num == 0
#     return false
#   elsif num % 2 == 0
#     return false
#   else
#     return true
#   end
# end

# exploration ver
def is_odd?(num)
  if num < 0
    return (num * -1).remainder(2) == 1
  else
    return num.remainder(2) == 1
  end

end

puts is_odd?(2)    # => false
puts is_odd?(5)    # => true
puts is_odd?(-17)  # => true
puts is_odd?(-8)   # => false
puts is_odd?(0)    # => false
puts is_odd?(7)    # => true