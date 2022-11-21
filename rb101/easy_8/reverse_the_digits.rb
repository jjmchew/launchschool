=begin
10:17 - 10:19

input
  - positive integer
output
  - integer number, but with digits reverse
assumptions / constraints
  - output will not contain 'leading' zeros (i.e., of reversed number)
  - assume no input validation

algorithm
  - convert input number to a string
  - reverse the string
  - convert the reversed string back to an integer

=end

def reversed_number(num)
  num = num.to_s.reverse.to_i
end

# test cases
p reversed_number(12345) == 54321
p reversed_number(12213) == 31221
p reversed_number(456) == 654
p reversed_number(12000) == 21 # No leading zeros in return value!
p reversed_number(12003) == 30021
p reversed_number(1) == 1