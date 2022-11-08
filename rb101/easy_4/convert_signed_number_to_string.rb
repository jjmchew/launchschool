=begin

assumptions / constraints
  - assume that a '+' should be added to all positive numbers
  - assume no input validation

algorithm
  - check if num is < 0
  - if so, prepend / unshift a '-'
  - otherwise, prepend / unshift a '+'
=end

DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def integer_to_string(int_num)
  chars = []
  num = int_num
  loop do
    chars.unshift(DIGITS[num % 10])
    num = num.divmod(10)[0]
    break if num == 0
  end
  chars.join
end

def signed_integer_to_string(num)
  if num < 0
    result = integer_to_string(num.abs).prepend('-')
  elsif num > 0
    result = integer_to_string(num).prepend('+')
  elsif num == 0
    result = DIGITS[0]
  end
end

# test cases
p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'