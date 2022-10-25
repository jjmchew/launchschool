# input:
#   - number

# output:
#   - if input number is negative, return the same number
#   - if input number is positive, return the negative of same number
#   - if 0, return 0

# assumptions / constraints
#   - assume integer (no decimals)

# data structure
#   - use integers

# algorithm
#   1.  multiply given number by -1
#   2.  if result is negative then return the result
#   3.  if result is positive then return the original number
#   4.  if result is 0 then return the result

def negative(num)
  test = num * -1
  if test < 0 then return test
  elsif test > 0 then return num
  elsif test == 0 then return 0
  end
end

# test cases
p negative(5) == -5
p negative(-3) == -3
p negative(0) == 0