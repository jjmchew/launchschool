# Problem
# input: positive integer
# output: integer : sum of the digits of given number
# assumptions / constraints:
#   - number can be any number of digits

# Data structure
#   - convert number to string to chop digits and then do sum

# Algorithm
#   1.  convert number to a string
#   2.  separate string into digits
#   3.  iterate across digits and add each to sum

def sum(num)
  digits = num.to_s.split('')
  digits.map! { |digit| digit.to_i }
  tot = digits.reduce { |tot, digit| tot += digit }
end


# Test Cases
puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45